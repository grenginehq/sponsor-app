"use client";

import { Control, useController } from "react-hook-form";
import { IconNames } from "../../types/icon";
import { Icon } from "../Icon";
import styles from "./input.module.css";
import classNames from "classnames";

interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: IconNames;
  type: "text" | "email" | "number" | "password" | "search" | "url" | "color";
  size?: "medium" | "large";
  control: Control<any>;
  min?: string;
  autoFocus?: boolean;
  disableSpecialCharFilter?: boolean;
  autoComplete?: string;
  onChange?: () => void;
  rules?: any;
  variant: "outlined" | "filled";
}

export const Input = ({
  label,
  name,
  placeholder,
  required,
  type,
  disabled,
  icon,
  size,
  control,
  min,
  autoFocus,
  autoComplete,
  onChange,
  rules,
  variant,
}: InputProps) => {
  const { field, fieldState } = useController({ control, name, rules });
  const { error } = fieldState;

  const getAutoCompleteValue = () => {
    if (autoComplete) return autoComplete;

    const autoCompleteMap: Record<string, string> = {
      email: "email",
      username: "username",
      password: "current-password",
      confirmPassword: "new-password",
      firstName: "given-name",
      lastName: "family-name",
      phone: "tel",
      phoneNumber: "tel",
      address: "street-address",
      city: "address-level2",
      state: "address-level1",
      zipCode: "postal-code",
      country: "country-name",
    };

    return autoCompleteMap[name as string] || "off";
  };

  const inputLabelClasses = classNames(styles.input_label, {
    [styles.input_label_outlined]: variant === "outlined",
    [styles.input_label_filled]: variant === "filled",
  });

  const inputContainerClasses = classNames(styles.input_container, {
    [styles.input_container_outlined]: variant === "outlined",
    [styles.input_container_filled]: variant === "filled",
  });

  return (
    <>
      <label className={inputLabelClasses} htmlFor={name}>
        {label}
      </label>
      <div className={inputContainerClasses}>
        {icon && <Icon icon={icon} />}
        <input
          id={name}
          type={type}
          readOnly={disabled}
          placeholder={placeholder}
          {...field}
          onChange={(e) => {
            field.onChange(e);
            onChange?.();
          }}
          min={min}
          autoFocus={autoFocus}
          autoComplete={getAutoCompleteValue()}
          data-form-type="other"
          data-lpignore={type === "password" ? "true" : undefined}
          spellCheck="false"
          disabled={disabled}
          className={styles.input}
        />
      </div>
      {error && <div className={styles.input_error}>{error?.message}</div>}
    </>
  );
};
