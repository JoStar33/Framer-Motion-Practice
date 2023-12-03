import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
  isShow: boolean;
  handleClosed: () => void;
  children: React.ReactNode;
}

export default function AnimationSideBar({ isShow, handleClosed, children }: Props) {

  return (
    <S.AnimationSideBar 
      initial={false}
      animate={{x: isShow ? '0vw' : '-17vw'}}
      transition={{ ease: "easeOut" }}>
      { children }
    </S.AnimationSideBar>
  );
};

const S = {
  AnimationSideBar: styled(motion.div)`
    background-color: skyblue;
    width: 20vw;
    height: 100vh;
  `,
};
