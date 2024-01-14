import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

// transitionEnd: {
//   display: "none",
// },

const blackHole: Variants = {
  blackHole: {
    rotate: [0, 360],
    transition: {
      ease: 'linear',
      repeat: Infinity,
      duration: 0.15,
    },
  },
  disappear: {
    scale: [1, 0],
    opacity: [1, 0],
    transition: {
      duration: 3,
    },
  },
  moveOriginPoint: {
    y: [0, -250, -200, -150],
    x: [0, 400],
    transition: {
      type: 'yoyo',
      duration: 3,
    },
  },
}

export default function AnimationDisappear() {
  const [exitWorker, setExitWorker] = React.useState(true);
  const handleExitWorker = () => {
    setExitWorker(prev => !prev);
  }
  return (
    <div>
      <AnimatePresence>
        {
          exitWorker &&
            <S.AnimationDisappear
              variants={blackHole}
              exit={['blackHole', 'disappear', 'moveOriginPoint']}
            >
              사라진다!
            </S.AnimationDisappear>
        }
      </AnimatePresence>
      <button onClick={handleExitWorker}>사라지도록.</button>
    </div>
  );
};

const S = {
  AnimationDisappear: styled(motion.p)`
    width: 200px;
    height: 3rem;
    text-align: center;
    vertical-align: middle;
    background-color: #9bff9b;
  `,
};
