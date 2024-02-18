import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: ThemeButton;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, onClick, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
