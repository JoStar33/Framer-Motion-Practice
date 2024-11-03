import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function ScrollTestPage() {
  const [isTick, setIsTick] = React.useState(false);
  React.useEffect(() => {
    const tickInterval = setInterval(() => {
      setIsTick((prev) => !prev);
    }, 500);
    return () => {
      clearInterval(tickInterval);
    };
  }, []);
  return (
    <S.ScrollTestPage>
      <motion.div className="card1">테스트</motion.div>
      <div
        className="card2"
        style={{ transform: isTick ? "rotate(20deg)" : "rotate(0deg)" }}
      >
        애니메이션
      </div>
    </S.ScrollTestPage>
  );
}

const S = {
  ScrollTestPage: styled.div`
    width: 100dvw;
    height: 2600dvw;
    position: relative;
    .card1 {
      width: 20dvw;
      font-size: 2dvw;
      background-color: red;
      aspect-ratio: 1;
    }
    .card2 {
      width: 20dvw;
      font-size: 2dvw;
      position: absolute;
      right: 0px;
      background-color: #6a8ea5;
      aspect-ratio: 1;
      transform: rotate(20deg);
    }
  `,
};
