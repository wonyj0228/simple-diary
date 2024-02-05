import { useRef, useState } from 'react';

function DiaryForm({ onCreate }) {
  const [data, setData] = useState({
    title: '',
    content: '',
    emotion: 1,
  });

  const titleInput = useRef();
  const contentInput = useRef();

  const handleSubmit = () => {
    if (data.title.length < 3) {
      titleInput.current.focus();
      return;
    }

    if (data.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(data.title, data.content, data.emotion);
    alert('저장되었습니다');

    setData({
      title: '',
      content: '',
      emotion: 1,
    });
  };

  return (
    <div className="DiaryForm">
      <h2>오늘의 일기</h2>

      <div className="data-form">
        <div className="row">
          <div className="title-col">제목</div>
          <div className="content-col">
            <input
              ref={titleInput}
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="title-col">내용</div>
          <div className="content-col">
            <textarea
              ref={contentInput}
              value={data.content}
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="title-col">감정 점수</div>
          <div className="content-col">
            <select
              value={data.emotion}
              onChange={(e) => setData({ ...data, emotion: e.target.value })}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <div className="row">
          <button onClick={handleSubmit}>저장하기</button>
        </div>
      </div>
    </div>
  );
}

export default DiaryForm;
