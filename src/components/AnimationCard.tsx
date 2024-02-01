import {
  HTMLMotionProps,
  MotionValue,
  easeIn,
  easeOut,
  motion,
  useTransform,
} from "framer-motion";
import styled from "styled-components";

interface Props extends HTMLMotionProps<"div"> {
  scrollYProgress: MotionValue<number>;
  cardId: number;
  cardLength: number;
}

export default function AnimationCard({
  cardId,
  cardLength,
  scrollYProgress,
  ...rest
}: Props) {
  const timeValue = 1 / cardLength;
  const y = useTransform(
    scrollYProgress,
    [cardId * timeValue, (cardId + 1) * timeValue],
    [300, -600],
    { ease: easeIn }
  );
  const x = useTransform(
    scrollYProgress,
    [cardId * timeValue, (cardId + 1) * timeValue],
    ["calc(50% - 125px)", "calc(100% - 125px)"],
    { ease: easeOut }
  );

  const rotate = useTransform(
    scrollYProgress,
    [cardId * timeValue, (cardId + 1) * timeValue],
    [0, 60],
    { ease: easeOut }
  );
  return (
    <S.AnimationCard style={{ top: y, left: x, rotate: rotate }} {...rest}>
      AnimationCard
    </S.AnimationCard>
  );
}

const S = {
  AnimationCard: styled(motion.div)`
    position: fixed;
    width: 250px;
    border-radius: 20px;
    left: calc(50% - 125px);
    height: 400px;
    border: 1px solid black;
    box-shadow: 0 2px 2px rgba(29, 29, 29, 0.04);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
