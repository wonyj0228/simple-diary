import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(1);

  const getData = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  // App component가 렌더될 때 마다 재생성됨
  // 컴포넌트가 mount 되는 시점에 한번만 실행됨.
  // 고로 mount 되는 시점에는 data state가 빈배열이었고, 데이터 저장시에도 빈배열을 추가하게됨
  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current++;
    setData((data) => [newItem, ...data]);
  }, []);
  // dependency Array를 비우고, setData에서 PrevData를 받아오는 형식으로 수정하면
  // 저장,삭제 시 이 함수가 재생성 되는걸 막을 수 있다.

  const onRemove = useCallback((targetId) => {
    setData((data) => data.filter((item) => item.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((item) =>
        item.id === targetId ? { ...item, content: newContent } : item
      )
    );
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((item) => item.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  // useMemo : useMemo(callbackFnc, [dept])
  // 함수가 어떤 return을 하고 있을 때 return까지의 연산을 최적화 하고 싶을 때
  // dept에 변화를 트래킹할 item을 명시
  // 함수를 값처럼 사용해 연산 최적화를 할 수 있다.
  // dept에 item이 변화하지 않으면 똑같은 리턴을 계산하지 않고 반환함

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
