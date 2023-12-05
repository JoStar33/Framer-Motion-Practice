import styled from "styled-components";
import AnimationBall from "../components/AnimationBall";

export default function BallPage() {

  return (
    <S.BallPage>
      <AnimationBall />
    </S.BallPage>
  );
};

const S = {
  BallPage: styled.div`
    width: 100%;
    height: 100%;
  `,
};
