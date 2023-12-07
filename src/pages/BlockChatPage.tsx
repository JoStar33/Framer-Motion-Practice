import styled from "styled-components";
import AnimationBlockChat from "../components/AnimationBlockChat";

export default function BlockChatPage() {

  return (
    <S.BlockChatPage>
      <AnimationBlockChat />
    </S.BlockChatPage>
  );
};

const S = {
  BlockChatPage: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
