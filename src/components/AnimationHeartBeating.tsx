import React from "react";
import styled from "styled-components";
import Icon from "./common/Icon";
import { motion } from "framer-motion";
import { flexCenter } from "../styles/Mixins";

export default function AnimationHeartBeating() {
  return (
    <S.AnimationHeartBeating
      initial={{
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
      }}
      animate={{
        rotate: [-20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0],
        width: [0, 200, 0],
        x: [0, -100, 0],
        y: [0, -100, 0],
        height: [0, 200, 0],
      }}
      transition={{
        ease: "easeIn",
        duration: 1.2,
      }}
    >
      <Icon width="100%" height="100%" name="Heart" />
    </S.AnimationHeartBeating>
  );
}

const S = {
  AnimationHeartBeating: styled(motion.div)`
    position: fixed;
    ${flexCenter}
  `,
};
