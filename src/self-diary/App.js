import DiaryForm from './DiaryForm';
import './App.css';
import { useRef, useState } from 'react';
import DiaryList from './DiaryList';

function App() {
  const [dataList, setDataList] = useState([]);

  const dataId = useRef(0);

  const onCreate = (title, content, emotion) => {
    setDataList([
      {
        title,
        content,
        emotion,
        created_date: new Date().getTime(),
        id: dataId.current,
      },
      ...dataList,
    ]);
    dataId.current++;
  };

  return (
    <div>
      <DiaryForm onCreate={onCreate} />
      <DiaryList dataList={dataList} />
    </div>
  );
}

export default App;
