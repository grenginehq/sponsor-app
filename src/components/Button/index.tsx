"use client";

import { ReactNode } from "react";
import { ButtonVariant, ButtonType } from "../../types/components";
import classNames from "classnames";
import styles from "./button.module.css";
import { Icon } from "../Icon";
import { IconNames } from "@/types/icon";

interface ButtonProps {
  label?: string;
  variant: ButtonVariant;
  type: ButtonType;
  disabled?: boolean;
  handleClick?: () => void;
  children?: ReactNode | string;
  classStyles?: any;
  icon?: IconNames
}

export const Button = ({
  label,
  variant = "primary",
  type = "button",
  handleClick,
  children,
  classStyles,
  icon
}: ButtonProps) => {
  const buttonClasses = classNames(styles.button, {
    [styles.button_primary]: variant === "primary",
    [styles.button_secondary]: variant === "secondary",
  });

  return (
    <button
      className={buttonClasses}
      role="button"
      type={type}
      onClick={(e) => {
        e.stopPropagation();
        handleClick?.();
      }}
      style={classStyles}
    >
      {label || children}
      {icon && <Icon icon={icon} />}
    </button>
  );
};
