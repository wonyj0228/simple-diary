import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '원예진',
    content: 'hi 1',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '홍길동',
    content: 'hi 2',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '아무개',
    content: 'hi 3',
    emotion: 3,
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
