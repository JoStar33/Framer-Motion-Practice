import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  rotate: number[];
  scale: number[];
  top?: number;
  left?: number;
}

export default function AnimationStar({
  rotate,
  scale,
  top = 0,
  left = 0,
}: Props) {
  const starAnimation = {
    starSpin: {
      rotate,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
    starZoomInOut: {
      scale,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };
  return (
    <S.AnimationStar
      className="pentagram"
      variants={starAnimation}
      animate={["starSpin", "starZoomInOut"]}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className="pentagram" />
    </S.AnimationStar>
  );
}

const S = {
  AnimationStar: styled(motion.div)`
    position: absolute;
    .pentagram {
      position: relative;
      display: inline-block;
      width: 0px;
      height: 0px;
      margin: 50px 0;
      color: #ffd67a;
      border-right: 80px solid transparent;
      border-left: 80px solid transparent;
      border-bottom: 56px solid #ffd67a;
      transform: rotate(35deg);
    }

    .pentagram::before,
    .pentagram::after {
      content: "";
      position: absolute;
      width: 0px;
      top: 0;
      height: 0px;
      color: #ffd67a;
      left: -80px;
      border-right: 80px solid transparent;
      border-left: 80px solid transparent;
      border-bottom: 56px solid #ffd67a;
    }

    .pentagram::before {
      transform: rotate(71deg);
    }

    .pentagram::after {
      transform: rotate(-71deg);
    }
  `,
};
