import { motion } from "framer-motion";
import styled from "styled-components";

export default function AnimationBall() {
  const list = {
    xMove: {
      x: [500, -500, 500],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
    yMove: {
      y: [0, -300, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <S.AnimationBall
      animate={["xMove", "yMove"]}
      variants={list}
    ></S.AnimationBall>
  );
}

const S = {
  AnimationBall: styled(motion.div)`
    border-radius: 50%;
    background-color: #c4c4c4;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
  `,
};
