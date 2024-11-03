import { motion, useAnimate, useMotionValue } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function AnimationHook() {
  //motion태그에 애니메이션을 거는게 아닌, ref정보를 가져와서 애니메이션을 동작시키는 방식.
  const [animateRef, animate] = useAnimate();
  //애니메이션의 값을 동기화하는 훅.
  const rotateValue = useMotionValue(0);

  const handleClickAnimateButton = () => {
    //참고로 비동기적으로 동작하는 코드이기 때문에 그 아래에 코드들이 순차적으로 진행되길 원한다면 await을 걸어줘야함
    animate(animateRef.current, { rotate: [0, 40, 0] });
  };

  React.useEffect(() => {
    //rotateValue의 값이 변화할때마다 rotate값을 찍음.
    //animate와 연계하면 >> rotateValue값이 변화할때마다 애니메이션이 변하게 만들 수 있음.
    const unsubscibeRotateEvent = rotateValue.on("change", (rotate) => {
      console.log(rotate);
    });
    return () => {
      //주의! 리액트는 알겠지만, 이벤트를 해제해주는 작업을 거치지않으면 메모리누수 및 이슈가 발생할 수 있음.
      //다음과 같이 이벤트를 해제하는 작업이 필요함.
      unsubscibeRotateEvent();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.AnimationHook>
      <motion.div
        className="rotate-box"
        ref={animateRef}
        //이렇게 값을 작성시 rotate값이 동기화됨.
        style={{ rotate: rotateValue }}
      ></motion.div>
      <button onClick={handleClickAnimateButton}>회전 애니메이션 동작</button>
    </S.AnimationHook>
  );
}

const S = {
  AnimationHook: styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    .rotate-box {
      width: 200px;
      height: 200px;
      background-color: red;
      position: fixed;
      top: 50%;
      left: 50%;
    }
  `,
};
