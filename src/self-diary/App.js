import DiaryForm from './DiaryForm';
import './App.css';
import '../reset.css';
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

  const onRemove = (id) => {
    const newData = dataList.filter((data) => id !== data.id);
    setDataList(newData);
  };

  const onEdit = (id, newContent) => {
    const newData = dataList.map((data) => {
      if (data.id === id) {
        data.content = newContent;
      }
      return data;
    });
    setDataList(newData);
  };

  return (
    <div>
      <DiaryForm onCreate={onCreate} />
      <DiaryList dataList={dataList} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
