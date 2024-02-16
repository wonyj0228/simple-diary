import React, { useState, useEffect } from 'react';

// 상태변화를 주도하지만 변화하지 않음. 따라서 Props 변화되지 않아서 Rerendering 발생 안됨
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Counter A Update :: count : ${count}`);
  });
  return <div>{count}</div>;
});

// A와 같은 결과를 기대하지만 Counter B는 다름
// 객체를 비교할 때는 얕은 비교를 한다.
// 얕은비교 = 객체의 주소가 같은가?
// 깊은비교 = 객체의 값이 같은가?

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`Counter B Update :: count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // true : 같은 값이니 리렌더링 발생 X
  // false : 다른 값이니 리렌더링 발생 O
  return prevProps.obj.count === nextProps.obj.count;
};

// React.memo의 2번째 인자에는 두 Props를 비교하는 비교함수
// 1번째 인자에는 컴포넌트
const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest2 = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest2;
