import { useState } from 'react';

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

  const handleEdit = () => {
    if (edit) {
      onEdit(id, newContent);
    }

    setEdit((prev) => !prev);
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
        <br />
        <span className="detail">
          오늘의 감정 점수 : {emotion} | 작성일 :
          {new Date(created_date).toLocaleString()}
        </span>
      </div>

      <div className="content">
        {edit ? (
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        ) : (
          <>{content}</>
        )}
      </div>
      <div>
        <button onClick={handleEdit}>수정하기</button>
        <button onClick={handleRemove}>삭제하기</button>
      </div>
    </div>
  );
}

export default DiaryItem;
