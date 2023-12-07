import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface IAnimationChatElement {
  valueRef: React.RefObject<HTMLDivElement>
}

export default function AnimationChatElement({ valueRef }: IAnimationChatElement) {
  const animateMotion = React.useMemo(() => {
    console.log(valueRef.current?.getBoundingClientRect().top);
    return {
      y: [630 - (valueRef.current?.getBoundingClientRect().top ?? 0), 0],
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    }
  }, []);

  return (
    <S.AnimationChatElement
      className="block"
      animate={animateMotion} >
        <motion.p
          initial={{
            width: 300
          }}
          animate={{
            width: "auto",
            borderRadius: 5,
            transition: {
              duration: 0.3,
            },
          }}
          >
          모오오오오션
        </motion.p>
    </S.AnimationChatElement>
  );
};

const S = {
  AnimationChatElement: styled(motion.div)`
    width: auto;
    height: 30px;
    display: flex;
    p {
      width: auto;
      background-color: #58a0bd;
    }
  `,
};
