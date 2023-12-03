import React from "react";
import styled from "styled-components";
import AnimationSideBar from "../components/AnimationSideBar";
import { motion } from "framer-motion";
import { SideBarItem } from "../types/app";
import AnimationSideBarItem from "../components/AnimationSideBarItem";

export default function SideBarPage() {
  const [isShow, setIsShow] = React.useState(false);

  const handleClosed = () => {
    setIsShow(false);
  };

  const handleShowSideBar = () => {
    setIsShow(prev => !prev);
  };

  const sidebarData: SideBarItem[] = [
    {
      icon: '🗺️',
      label: '네이버'
    }, {
      icon: '🎪',
      label: '다음'
    }, {
      icon: '✏️',
      label: '카카오'
    }
  ];

  return (
    <S.SideBarPage>
      <AnimationSideBar isShow={isShow} handleClosed={handleClosed}>
        {
          sidebarData.map((sidebar) => 
            <AnimationSideBarItem 
              isShow={isShow} 
              icon={sidebar.icon}>
              {sidebar.label}
            </AnimationSideBarItem>)
        }
      </AnimationSideBar>
      <motion.div 
        className="main" 
        initial={false}
        animate={{x: isShow ? '0vw' : '-17vw'}}
        transition={{ ease: "easeOut" }}>
        <button onClick={handleShowSideBar}>사이드바</button>
      </motion.div>
    </S.SideBarPage>
  );
};

const S = {
  SideBarPage: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    .main {
      display: flex;
      justify-content: flex-start;
      width: 100vw;
      height: 100vh;
      button {
        width: 100px;
        height: 2rem;
      }
    }
  `,
};
