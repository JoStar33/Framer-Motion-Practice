import { motion } from "framer-motion";
import styled from "styled-components";

export default function AnimationAudio() {

  return (
    <S.AnimationAudio>
      <motion.div
        className="audio-bar" 
        animate={{ height: ['80px', '40px', '65px', '80px'] }} 
        transition={{ repeat: Infinity, duration: 3 }}></motion.div>
      <motion.div
        className="audio-bar"
        animate={{ height: ['40px', '80px', '40px'] }} 
        transition={{ repeat: Infinity, duration: 3 }}></motion.div>
      <motion.div 
        className="audio-bar" 
        animate={{ height: ['70px', '30px', '80px', '40px', '70px']  }} 
        transition={{ repeat: Infinity, duration: 3 }}></motion.div>
    </S.AnimationAudio>
  );
};

const S = {
  AnimationAudio: styled.div`
    height: 80px;
    display: flex;
    align-items: flex-end;
    .audio-bar {
      background-color: black;
      width: 40px;
    }
  `,
};
