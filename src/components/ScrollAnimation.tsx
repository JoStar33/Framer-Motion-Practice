import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const [isHovered, setIsHovered] = React.useState(false);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [1400, 2000]);
  const y3 = useTransform(scrollYProgress, [0, -6000], [20000, 23000]);

  return (
    <S.ScrollAnimation>
      <motion.div
        className="animate-hover-card"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="animate-hover-card--first"
          style={{ transformOrigin: "right bottom" }}
          transition={{
            duration: 0.3,
          }}
          animate={
            isHovered
              ? { rotate: [20, 50, 20], zIndex: 3 }
              : { rotate: [20, 51, 20] }
          }
        />
        <motion.div
          className="animate-hover-card--second"
          animate={isHovered ? {} : {}}
        />
      </motion.div>
      <motion.div style={{ y: y1 }} className="animate-scroll-background" />
      <motion.div style={{ y: y2 }} className="animate-scroll-block" />
      <motion.div style={{ y: y3, x: 200 }} className="animate-scroll-block" />

      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="/test-video.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
    </S.ScrollAnimation>
  );
}

const S = {
  ScrollAnimation: styled.div`
    width: 100vw;
    height: 30000px;
    position: relative;
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
    .animate-hover-card {
      position: absolute;
      left: 50%;
      top: 20000px;
      &--first {
        position: absolute;
        width: 200px;
        height: 300px;
        background-color: #ff9421;
        border-radius: 20px;
      }
      &--second {
        position: absolute;
        width: 200px;
        height: 300px;
        background-color: #8cff21;
        border-radius: 20px;
      }
    }
    .bg-video {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: -1;
      opacity: 0.15;
    }

    .bg-video__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `,
};
