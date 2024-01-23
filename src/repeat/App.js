import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '예진',
    content: '하이 1',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '예진2',
    content: '하이 2',
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '예진3',
    content: '하이 3',
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
