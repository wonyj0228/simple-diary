import React, { useState, useEffect } from 'react';

// React.memo
// 컴포넌트의 props가 변화하지 않으면 컴포넌트를 리렌더링 하지 않음
// 컴포넌트 자체를 기억해주는 것

const Textview = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  });
  return <div>{text}</div>;
});

const Countview = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`);
  });
  return <div>{count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <Countview count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
