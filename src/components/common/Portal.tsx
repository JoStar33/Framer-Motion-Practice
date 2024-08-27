import React from "react";
import ReactDOM from "react-dom";

interface IPortal {
  children: React.ReactNode;
}

const Portal = ({ children }: IPortal) => {
  if (window && typeof window !== "object") {
    return <></>;
  }

  const element = document.getElementById("portal");

  if (!element) {
    return <></>;
  }

  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
