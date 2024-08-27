import styled from "styled-components";
import AnimationHeartBeating from "../components/AnimationHeartBeating";
import { flexCenter } from "../styles/Mixins";
import Portal from "../components/common/Portal";

export default function HeartBeatingPage() {
  return (
    <S.HeartBeatingPage>
      <button>하트비트</button>
      <Portal>
        <AnimationHeartBeating />
      </Portal>
    </S.HeartBeatingPage>
  );
}

const S = {
  HeartBeatingPage: styled.div`
    ${flexCenter}
  `,
};
