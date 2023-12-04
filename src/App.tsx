// import AnimationLoading from './components/AnimationLoading';
import styled from 'styled-components';
import AnimationAudio from './components/AnimationAudio';
import AnimationChat from './components/AnimationChat';
import SideBarPage from './pages/SideBarPage';


export default function App() {
  return (
    // <SideBarPage />
    <S.App>
      <AnimationChat/>
    </S.App>
  );
}

const S = {
  App: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
}