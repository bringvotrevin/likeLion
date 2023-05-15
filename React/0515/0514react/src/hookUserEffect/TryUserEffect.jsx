import React, { useState, useEffect } from 'react'; //useEffect추가

function Counter() {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const countUp = () => {
    setCount(count + 1);
  };
  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else if (count % 2) {
      alert('홀수입니다');
    } else {
      alert('짝수입니다');
    }
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>
  );
}
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
