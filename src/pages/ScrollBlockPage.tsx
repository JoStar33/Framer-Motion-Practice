import styled from "styled-components";
import AnimationScrollBlock from "../components/AnimationScrollBlock";

export default function ScrollBlockPage() {

  return (
    <S.ScrollBlockPage>
      <AnimationScrollBlock />
    </S.ScrollBlockPage>
  );
};

const S = {
  ScrollBlockPage: styled.div`
    width: 100%;
    height: 100%;
  `,
};
