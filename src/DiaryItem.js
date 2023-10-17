const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  // key : element로 list를 만들때 포함해야하는 특수한 어트리뷰트
  // 요소에 고유성을 부여하기 위해서 사용
  // 배열의 index는 순번이 바뀔 수 있음으로 지양하고 고유 id를 주는 것이 이상적임
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
