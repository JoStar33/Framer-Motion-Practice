import React, { useRef } from "react";
import styled from "styled-components";
import AnimationChatElement from "./AnimationChatElement";

export default function AnimationBlockChat() {
  const [chatArray, setChatArray] = React.useState<number[]>([]);
  const valueRef = useRef<HTMLDivElement>(null);
  const handleChatCreate = () => {
    setChatArray([...chatArray, chatArray.length]);
  };

  return (
    <S.AnimationBlockChat>
      <div className="chat-main">
        {
          chatArray.map((chat, _id) => 
            <AnimationChatElement valueRef={valueRef} key={_id} />
          )
        }
        <div ref={valueRef}></div>
      </div>
      <div className="chat-container">
        <button onClick={handleChatCreate}>챗</button>
      </div>
    </S.AnimationBlockChat>
  );
};

const S = {
  AnimationBlockChat: styled.div`
    .chat-main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: scroll;
      width: 300px;
      height: 600px;
      border: 1px solid black;
      ::-webkit-scrollbar {
        display: none;
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        display: none;
        background-color: #5f5f5f;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-track {
        display: none;
        background-color: #cecece;
      }
    }
    .chat-container {
      width: 100%;
      button {
        width: 300px;
      }
    }
  `,
};
