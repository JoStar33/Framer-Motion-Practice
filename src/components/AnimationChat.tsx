import { motion } from "framer-motion";
import styled from "styled-components";

export default function AnimationChat() {

  const dotData = [{
    y: [-5, -3, 0, -3, -5],
    opacity: [1, 0.5, 0, 0.5, 1],
  }, {
    y: [-3, -5, -3, 0, -3],
    opacity: [0.5, 1, 0.5, 0, 0.5],
  }, {
    y: [0, -3, -5, -3, 0],
    opacity: [0, 0.5, 1, 0.5, 0],
  }, {
    y: [-3, 0, -3, -5, -3],
    opacity: [0.5, 0, 0.5, 1, 0.5],
  }];

  return (
    <S.AnimationChat>
      {
        dotData.map((dot) => (
          <motion.div 
            className="dot" 
            animate={{
              y: dot.y,
              opacity: dot.opacity,
              transition: {
                duration: 1.5,
                repeat: Infinity
              },
            }}></motion.div>))
      }
    </S.AnimationChat>
  );
};

const S = {
  AnimationChat: styled.div`
    width: 200px;
    height: 50px;
    box-shadow: rgb(0 0 0 / 40%) 0 0 10px 0;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .dot {
      width: 20px;
      height: 20px;
      border-radius: 100px;
      background-color: gray;
    }
  `,
};
