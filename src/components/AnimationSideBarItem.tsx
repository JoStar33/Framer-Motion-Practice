import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  isShow: boolean;
  icon: string;
  children: React.ReactNode;
}

export default function AnimationSideBarItem({ icon, children, isShow }: Props) {

  return (
    <S.AnimationSideBarItem
      transition={{ ease: "easeOut", delay: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isShow ? 1 : 0 }}>
      <p>{icon}</p>
      { children }
    </S.AnimationSideBarItem>
  );
};

const S = {
  AnimationSideBarItem: styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
};
