import { useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 150px;
  border: 2px solid red;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  padding: 15px 20px;
  border-radius: 15px;
  background: wheat; 
`;

function Counter() {
  let [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount((count = 0));
  };

  return (
    <>
      <ButtonWrapper>
        <Button onClick={increaseCounter}>+</Button>
        <Button onClick={decreaseCounter}>-</Button>
        <Button onClick={resetCounter}>RESET</Button>
      </ButtonWrapper>

      <h2>Counter is set to {count}</h2>
    </>
  );
}

export default Counter;
