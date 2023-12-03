import { motion } from "framer-motion";
import styled from "styled-components";

interface AnimationData {
  icon: string;
  coord: {
    x: number;
    y: number;
  };
  opacity: [number, number, number, number, number];
}

export default function AnimationLoading() {
  const animationData: AnimationData[] = [{
    icon: '🐶',
    coord: {
      x: 10,
      y: 10,
    },
    opacity: [1, 0.5, 0, 0.5, 1],
  }, {
    icon: '🐶',
    coord: {
      x: 75,
      y: 60,
    },
    opacity: [0.5, 1, 0.5, 0, 0.5],
  }, {
    icon: '🐶',
    coord: {
      x: 24,
      y: 65,
    },
    opacity: [0.5, 0, 0.5, 1, 0.5],
  }, {
    icon: '🐶',
    coord: {
      x: 75,
      y: 10,
    },
    opacity: [0, 0.5, 1, 0.5, 0],
  }];

  return (
    <S.AnimationLoading>
      <div className="loading-container">
        {
          animationData.map(animation => (
            <motion.p
              style={{top: `${animation.coord.y}px`, left: `${animation.coord.x}px`}}
              animate={{ opacity: animation.opacity }} 
              transition={{ repeat: Infinity, duration: 3 }}>
              {animation.icon}
            </motion.p>)
          )
        }
        <img src="/Spinner200px.gif" alt="로딩" />
      </div>
    </S.AnimationLoading>
  );
};

const S = {
  AnimationLoading: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      position: relative;
      p {
        position: absolute;
      }
    }
  `,
};
