import styled from "styled-components";
import AnimationCard from "./AnimationCard";
import { circOut, easeIn, easeOut, useScroll, useTransform } from "framer-motion";

interface Props {
  cards: string[];
}

export default function AnimationCardMove({ cards }: Props) {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 0.25], [300, -600], { ease: easeOut });
  const x1 = useTransform(scrollYProgress, [0, 0.25], ['calc(50% - 125px)', 'calc(100% - 125px)'], { ease: easeOut });
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [300, -600]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [300, -600]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [300, -600]);

  return (
    <S.AnimationCardMove>
      <AnimationCard 
        scrollYProgress={scrollYProgress} 
        style={{top: y1, left: x1}} 
        transition={{
          ease: "easeOut"
        }}></AnimationCard>
      <AnimationCard scrollYProgress={scrollYProgress} style={{top: y2}}></AnimationCard>
      <AnimationCard scrollYProgress={scrollYProgress} style={{top: y3}}></AnimationCard>
      <AnimationCard scrollYProgress={scrollYProgress} style={{top: y4}}></AnimationCard>
    </S.AnimationCardMove>
  );
};

const S = {
  AnimationCardMove: styled.div`
    width: 100%;
    height: 8000px;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
