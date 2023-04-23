import React from "react";

import { Wrapper } from "./styles";

interface IProps {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SecondaryButton: React.FC<IProps> = ({
  children,
  onClick,
}: IProps) => {
  return (
    <Wrapper
      onClick={(event) => {
        if (!!onClick) {
          onClick(event);
        }
      }}
    >
      {children}
    </Wrapper>
  );
};

export default SecondaryButton;
