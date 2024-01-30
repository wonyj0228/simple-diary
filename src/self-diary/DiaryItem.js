function DiaryItem({ title, content, emotion, created_date }) {
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

      <div className="content">{content}</div>
    </div>
  );
}

export default DiaryItem;
