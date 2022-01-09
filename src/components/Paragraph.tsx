import React from "react";

interface IChildrenProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: IChildrenProps) => {
  return <p className="para">{children}</p>;
};

export default Paragraph;
