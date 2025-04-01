import { Link } from "react-router-dom";
import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  redirect?: boolean;
  toRef?: string;
  children?: React.ReactNode;
  iconMargin?: string;
  reverse?: boolean;
};

const Button = ({
  text,
  onClick,
  disabled = false,
  className,
  redirect,
  toRef = "#",
  iconMargin,
  children,
  reverse = false,
}: ButtonProps) => {
  const renderContent = () => (
    <div
      className="flex items-center justify-center"
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <span className="flex">
        {children && <i style={{ margin: iconMargin }}>{children}</i>}
      </span>
      {text && <span className="font-semibold">{text}</span>}
    </div>
  );

  const baseStyle =
    "py-2 px-4 rounded-xl text-white transition duration-300 text-xs";

  const disabledStyle = "opacity-50 cursor-not-allowed";

  if (redirect) {
    return (
      <Link
        to={disabled ? "#" : toRef}
        className={`${baseStyle} ${
          disabled ? disabledStyle : ""
        } ${className} `}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyle} ${disabled ? disabledStyle : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {renderContent()}
    </button>
  );
};

export default React.memo(Button);
