import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";
import LikeButton from "./components/LikeButton";
import { BsFillArchiveFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [messageVisible, setmessageVisibility] = useState(false);
  return (
    <>
      <LikeButton onClick={() => {console.log('Clicked!');}}/>
    </>
  );
}

export default App;
