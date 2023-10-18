import React, { useEffect, useState } from 'react';

// const UnmountText = () => {
//   useEffect(() => {
//     console.log('Mount!');

//     //callback 함수가 함수를 return 시키면 Unmount
//     return () => {
//       // UnMount 시점에 실행하게 됨
//       console.log('Unmount!');
//     };
//   }, []);

//   return <div>Unmount Testing Component</div>;
// };

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useEffect = 값의 변화를 감지하고 싶은 것만 골라서 callback함수를 수행시킬 수 있음
  // mount, unmount 시점에도 가능

  // Mount 시점에 사용하고 싶다면 빈배열
  useEffect(() => {
    console.log('Mount!');
  }, []);

  // update 될때마다 사용하고 싶다면 두번째 인자를 넘기지 않으면 됨
  // 렌더링 될 때 마다 실행
  useEffect(() => {
    console.log('Update!');
  });

  // dependency array의 값이 변화하면 실행됨 (Update)
  useEffect(() => {
    console.log(`count is update ${count}`);
    if (count > 5) {
      alert('count가 5를 넘었습니다. 따라서 1로 초기화합니다');
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text is update ${text}`);
  }, [text]);

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      {/* unmount test
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountText />} */}
    </div>
  );
};

export default Lifecycle;
