// import AnimationLoading from './components/AnimationLoading';
import styled from "styled-components";
// import AnimationAudio from "./components/AnimationAudio";
// import AnimationChat from "./components/AnimationChat";
// import SideBarPage from "./pages/SideBarPage";
// import ScrollBlockPage from "./pages/ScrollBlockPage";
// import BallPage from "./pages/BallPage";
// import BlockChatPage from "./pages/BlockChatPage";
// import FunnyStarPage from "./pages/FunnyStarPage";
import HeartBeatingPage from "./pages/HeartBeatingPage";
import AnimationPlayButton from "./components/AnimationPlayButton";

export default function App() {
  return (
    // <SideBarPage />
    <S.App>
      <AnimationPlayButton />
    </S.App>
  );
}

const S = {
  App: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
