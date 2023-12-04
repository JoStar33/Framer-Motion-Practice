import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

export default function AnimationScrollBlock() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.25], [-75, 600]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [-75, 550]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [-75, 500]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [-75, 450]);

  return (
    <S.AnimationScrollBlock>
      <motion.div
        className="scroll-block"
        style={{
          y: y1
        }}></motion.div>
      <motion.div
        className="scroll-block"
        style={{
          x: 50,
          y: y2
        }}></motion.div>
      <motion.div
        className="scroll-block"
        style={{
          x: 100,
          y: y3
        }}></motion.div>
      <motion.div
        className="scroll-block"
        style={{
          x: 150,
          y: y4
        }}></motion.div>
    </S.AnimationScrollBlock>
  );
};

const S = {
  AnimationScrollBlock: styled.div`
    background-color: #325c81;
    width: 100%;
    height: 3000px;
    position: relative;
    .scroll-block {
      position: fixed;
      left: calc(50% - 50px);
      width: 100px;
      height: 50px;
      background-color: white;
    }
  `,
};
