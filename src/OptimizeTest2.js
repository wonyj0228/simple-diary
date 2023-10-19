import React, { useEffect, useState } from 'react';

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Counter A Update - count : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`Counter B Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

// 필요에 의해서 props가 깊은 비교를 위해 수행해야 한다면, 비교함수를 제공해라
// prev, next는 정해져있고 매개변수 이름은 개인이 설정할 수 있음
const areEqual = (prevProps, nextProps) => {
  // 이전 props와 다음 props가 같다 => true => 리렌더링 X
  // 이전 props와 다음 props가 다르다 => false => 리렌더링 O

  return prevProps.obj.count === nextProps.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest2 = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        {/* <CounterB obj={obj} /> */}
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest2;
