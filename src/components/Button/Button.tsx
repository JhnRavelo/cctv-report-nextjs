"use client";
import "./button.scss";

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

const Button = ({ title, onClick, type }: ButtonPropsType) => {
  return (
    <div className="button-container" onClick={onClick}>
      <button type={type}>{title}</button>
    </div>
  );
};

export default Button;
