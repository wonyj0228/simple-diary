import DiaryItem from './DiaryItem';

function DiaryList({ dataList }) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{dataList.length}개의 일기가 있습니다</h4>

      <div>
        {dataList.map((data) => (
          <DiaryItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default DiaryList;
