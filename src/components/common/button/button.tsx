import React from "react";

type ButtonTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonTypes> = ({
  onClick,
  className,
  type,
  isDisabled,
  children,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button };
