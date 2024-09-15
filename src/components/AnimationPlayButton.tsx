import { motion, AnimationProps } from "framer-motion";
import React from "react";
import styled from "styled-components";

const changeTriangleStyle = (
  playAnimation: boolean
): AnimationProps["animate"] => ({
  borderBottomColor: "black",
  borderBottomStyle: "solid",
  borderBottomWidth: playAnimation ? 100 : 10,
  borderLeftColor: playAnimation ? "transparent" : "black",
  borderLeftStyle: "solid",
  borderLeftWidth: playAnimation ? 50 : 100,
  borderRightColor: playAnimation ? "transparent" : "black",
  borderRightStyle: "solid",
  borderRightWidth: playAnimation ? 50 : 100,
  borderTopColor: playAnimation ? "transparent" : "black",
  borderTopStyle: "solid",
  borderTopWidth: playAnimation ? 0 : 10,
});

const changeTrapezoidStyle = (
  playAnimation: boolean
): AnimationProps["animate"] => ({
  borderLeftColor: playAnimation ? "transparent" : "black",
  borderLeftStyle: "solid",
  borderLeftWidth: 50,
  borderRightColor: playAnimation ? "transparent" : "black",
  borderRightStyle: "solid",
  borderRightWidth: 50,
  borderTopColor: playAnimation ? "transparent" : "black",
  borderTopStyle: "solid",
  borderTopWidth: playAnimation ? 0 : 10,
  borderBottomColor: "black",
  borderBottomStyle: "solid",
  borderBottomWidth: playAnimation ? 100 : 10,
});

export default function AnimationPlayButton() {
  const [playAnimation, setPlayAnimation] = React.useState(false);
  return (
    <>
      <button
        style={{ marginBottom: "250px" }}
        onClick={() => setPlayAnimation((prev) => !prev)}
      >
        플레이
      </button>
      <S.AnimationPlayButton>
        <motion.div
          className="triangle"
          animate={changeTriangleStyle(playAnimation)}
        />
        <motion.div
          className="trapezoid"
          animate={changeTrapezoidStyle(playAnimation)}
        />
      </S.AnimationPlayButton>
    </>
  );
}

const S = {
  AnimationPlayButton: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    position: relative;
    transform: rotate(90deg);
    height: 150px;
    .triangle {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
    }
    .trapezoid {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px; /* 아래쪽 너비 */
      height: 0;
    }
  `,
};
