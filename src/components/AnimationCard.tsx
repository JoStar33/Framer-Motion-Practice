import { HTMLMotionProps, MotionValue, motion, useTransform } from "framer-motion";
import styled from "styled-components";

interface Props extends HTMLMotionProps<"div">{
  scrollYProgress: MotionValue<number>;
}

export default function AnimationCard({scrollYProgress, ...rest}: Props) {
  const yValue = useTransform(scrollYProgress, [0.75, 1], [-75, 450]);
  return (
    <S.AnimationCard {...rest}>
      AnimationCard
    </S.AnimationCard>
  );
};

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
