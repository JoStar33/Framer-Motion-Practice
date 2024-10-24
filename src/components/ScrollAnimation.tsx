import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [1400, 2000]);
  const y3 = useTransform(scrollYProgress, [0, -6000], [20000, 23000]);

  return (
    <S.ScrollAnimation>
      test
      <motion.div style={{ y: y1 }} className="animate-scroll-background" />
      <motion.div style={{ y: y2 }} className="animate-scroll-block" />
      <motion.div style={{ y: y3, x: 200 }} className="animate-scroll-block" />
    </S.ScrollAnimation>
  );
}

const S = {
  ScrollAnimation: styled.div`
    width: 100vw;
    height: 30000px;
    .animate-scroll-background {
      width: 100%;
      position: fixed;
      height: 1000px;
      background-color: #46c4ff;
    }
    .animate-scroll-block {
      position: absolute;
      width: 200px;
      background-color: #11442b;
      height: 200px;
    }
  `,
};
