import React, { useEffect, useState } from 'react';

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((prev) => !prev);

  // Mount
  useEffect(() => {
    console.log('Mount!');
  }, []);

  // Update - 컴포넌트가 업데이트가 될 때
  // 1. 의존성배열을 아예 넣지 않으면 컴포넌트가 업데이트 될 때 실행됨
  // 2. 의존성 배열에 state(변수)를 넣으면 state가 변경될 때 해당 콜백 함수 실행됨
  useEffect(() => {
    console.log('Update!');
  });

  useEffect(() => {
    console.log(`count is Update : ${count}`);
    if (count > 5) {
      alert('count가 5를 넘었습니다. 따라서 1로 초기화합니다.');
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text is Update : ${text}`);
  }, [text]);

  const UnmountTest = () => {
    useEffect(() => {
      console.log('Mount!');

      // Unmount
      // useEffect의 콜백함수에서 함수를 return
      return () => {
        console.log('Unmount!');
      };
    }, []);

    return <div>Unmount Testing Component</div>;
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
