import DiaryForm from './DiaryForm';
import './App.css';
import { useState } from 'react';

function App() {
  const [dataList, setDataList] = useState([]);

  const onCreate = (title, content, emotion) => {
    setDataList([
      ...dataList,
      {
        title,
        content,
        emotion,
        created_date: new Date().getTime(),
      },
    ]);
  };

  return (
    <div>
      <DiaryForm onCreate={onCreate} />
    </div>
  );
}

export default App;
