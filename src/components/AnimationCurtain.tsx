import { Variants, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function AnimationCurtain() {
  const [curtainHover, setCurtainHover] = React.useState<{
    leftHovered: boolean;
    rightHobered: boolean;
  }>({
    leftHovered: false,
    rightHobered: false,
  });

  const curtainPartLeftShake: Variants = {
    active: {
      borderBottomLeftRadius: [0, '100px 50%', 0, '50px 50%', 0, '25px 50%', 0],
      height: ['100vh', '100vh'],
      transition: {
        duration: 4,
      }
    },
  };
  const curtainPartLeftMove: Variants = {
    active: {
      rotate: [0, -5, 0, -2, 0, -1, 0],
      transition: {
        duration: 4,
      },
      transformOrigin: 'top left',
    },
  }

  return (
    <S.AnimationCurtain>
      <div className="curtain-top"/>
      <div className="curtain-main">
        <motion.div 
          className="curtain-part"
          variants={curtainPartLeftMove}
          animate={curtainHover.leftHovered ? 'active' : undefined}>
          <motion.div 
            onHoverStart={() => {
              setCurtainHover(prev => {
                return {
                  ...prev,
                  leftHovered: true,
                }
              })
            }}
            onHoverEnd={() => {
              setCurtainHover(prev => {
                return {
                  ...prev,
                  leftHovered: false,
                }
              })
            }}
            className="curtain-part-pillar"/>
          <div className="curtain-part-outer-shake">
            <motion.div 
              className="curtain-part-shake"
              variants={curtainPartLeftShake}
              initial={{
                borderBottomLeftRadius: 0,
              }}
              animate={curtainHover.leftHovered ? 'active' : undefined}
            />
          </div>
        </motion.div>
        <div className="out-cover-left"/>
        {/* <motion.div className="curtain-part"/> */}
      </div>
    </S.AnimationCurtain>
  );
};

const S = {
  AnimationCurtain: styled.div`
    width: 100vw;
    height: 100vh;
    .curtain-top {
      width: 100%;
      height: 70px;
      background-color: #da5252;
      z-index: 99;
    }
    .curtain-main {
      width: 100%;
      height: calc(100vh - 70px);
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      position: relative;
    }
    .curtain-part {
      display: flex;
      flex-direction: row;
      height: calc(100vh - 70px);
      &-pillar {
        width: 200px;
        height: calc(100vh);
        background-color: #da5252;
      }
      &-outer-shake {
        background:#da5252;
        width: 200px;
        height: calc(100vh);
        position: relative;
      }
      &-shake {
        position: absolute;
        width: 200px;
        height: 100vh;
        background-color: white;
      }
    }
    .out-cover-left {
      width: 200px;
      height: 100vh;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      background-color: #da5252;
    }
  `,
};
