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

export default function App() {
  return (
    // <SideBarPage />
    <S.App>
      <HeartBeatingPage />
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
