import React from "react";
import styled from "styled-components";
import { flexCenter } from "../styles/Mixins";
import { motion, useDragControls } from "framer-motion";

export default function AnimationDrag() {
  const swipeDragControls = useDragControls();
  const swipeDragControls2 = useDragControls();
  return (
    <S.AnimationDrag>
      <motion.div
        //드래그에 대한 조작을 개발자가 하도록 값을 컨트롤을 걸어줌.
        //요소에 마우스를 올려놨을 경우에만 드래그가 동작하도록 제약을 걸 수 있음
        //이때 dragListener에 false를 둬서 걸려있던 기본 이벤트 제거
        onPointerDown={(e) => swipeDragControls.start(e)}
        dragControls={swipeDragControls}
        //드래그 방향
        drag="x"
        //드래그 시작값과 끝나는 값을 지정할 수 있음.
        dragConstraints={{ left: 0, right: 1000 }}
        dragListener={false}
        className="drag-element"
      >
        TEST
      </motion.div>
      <motion.div
        onPointerDown={(e) => swipeDragControls2.start(e)}
        dragControls={swipeDragControls2}
        drag="x"
        dragConstraints={{ left: 0, right: 1000 }}
        dragListener={false}
        className="drag-element"
      >
        TEST
      </motion.div>
    </S.AnimationDrag>
  );
}

const S = {
  AnimationDrag: styled.div`
    width: 100%;
    height: 100vh;
    .drag-element {
      ${flexCenter};
      width: 300px;
      user-select: none;
      height: 300px;
      background-color: #ff9538;
    }
  `,
};
