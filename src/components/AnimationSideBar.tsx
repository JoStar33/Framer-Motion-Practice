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
      <div className="side-bar-header">
        <button onClick={handleClosed}>닫기</button>
      </div>
      { children }
    </S.AnimationSideBar>
  );
};

const S = {
  AnimationSideBar: styled(motion.div)`
    background-color: skyblue;
    width: calc(20vw - 40px);
    height: calc(100vh - 40px);
    padding: 20px;
    .side-bar-header {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 4rem;
    }
  `,
};
