import { useState } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Button = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 15px;
`;

interface Props {
  onClick: () => void;
}

function LikeButton({ onClick }: Props) {
  let [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <AiFillHeart color="wheat" size={150} onClick={toggle} />
    );
  return <AiOutlineHeart size={160} onClick={toggle} />;
}

export default LikeButton;
