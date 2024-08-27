import styled from "styled-components";
import AnimationCard from "./AnimationCard";
import { easeOut, useScroll, useTransform } from "framer-motion";

interface Props {
  cards: string[];
}

export default function AnimationCardMove({ cards }: Props) {
  const { scrollYProgress } = useScroll();

  return (
    <S.AnimationCardMove>
      {cards.map((card, _id) => (
        <AnimationCard
          scrollYProgress={scrollYProgress}
          cardId={_id}
          cardLength={cards.length}
        ></AnimationCard>
      ))}
    </S.AnimationCardMove>
  );
}

const S = {
  AnimationCardMove: styled.div`
    width: 100%;
    height: 8000px;
    position: relative;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
