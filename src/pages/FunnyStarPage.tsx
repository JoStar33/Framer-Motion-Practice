import styled from "styled-components";
import { flexCenter } from "../styles/Mixins";
import AnimationStar from "../components/AnimationStar";

export default function FunnyStarPage() {
  return (
    <S.FunnyStarPage>
      <AnimationStar
        rotate={[0, 80, 0, 80, 0, -80, 0]}
        scale={[0, 3, 0.5, 2, 0.8, 1]}
        top={200}
        left={1000}
      />
      <AnimationStar
        rotate={[0, 80, 0, 80, 0, -80, 0]}
        scale={[2, 0.5, 1.5, 0.8, 1]}
        top={50}
        left={100}
      />
      <AnimationStar
        rotate={[0, 80, 0, 80, 0, -80, 0]}
        scale={[1, 2, 0.8, 2, 1]}
        top={300}
        left={500}
      />
    </S.FunnyStarPage>
  );
}

const S = {
  FunnyStarPage: styled.div`
    width: 100%;
    height: 100%;
    ${flexCenter}
  `,
};
