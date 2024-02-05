import { useRef, useState } from 'react';

function DiaryItem({
  title,
  content,
  emotion,
  created_date,
  id,
  onRemove,
  onEdit,
}) {
  const [edit, setEdit] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const newContentInput = useRef();

  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleEdit = () => {
    if (newContent.length < 5) {
      newContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, newContent);
      toggleEdit();
    }
  };

  const handleEditQuit = () => {
    setNewContent(content);
    toggleEdit();
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제합니까?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="title">{title}</span>
        <span className="detail">
          오늘의 감정 점수 : {emotion} | 작성일 :
          {new Date(created_date).toLocaleString()}
        </span>
      </div>

      <div className="content">
        {edit ? (
          <textarea
            ref={newContentInput}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        ) : (
          <>{content}</>
        )}
      </div>
      <div>
        {edit ? (
          <>
            <button onClick={handleEdit}>수정 완료</button>
            <button onClick={handleEditQuit}>수정 취소</button>
          </>
        ) : (
          <>
            <button onClick={toggleEdit}>수정하기</button>
            <button onClick={handleRemove}>삭제하기</button>
          </>
        )}
      </div>
    </div>
  );
}

export default DiaryItem;
