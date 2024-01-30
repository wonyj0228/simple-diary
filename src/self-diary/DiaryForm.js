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
  };

  return (
    <div className="DiaryForm">
      <h2>오늘의 일기</h2>

      <table>
        <tbody>
          <tr>
            <th>제목</th>
            <td>
              <input
                ref={titleInput}
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea
                ref={contentInput}
                value={data.content}
                onChange={(e) => setData({ ...data, content: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <th>감정 점수</th>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSubmit}>저장하기</button>
    </div>
  );
}

export default DiaryForm;
