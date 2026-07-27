"use client";

import classNames from "classnames";
import { Control, useController } from "react-hook-form";

import { Icon } from "../Icon";
import styles from "./action_pill.module.css";

interface ActionPillProps {
  label: string;
  control: Control<any>;
  name: string;
  value: string;
  isFeatured?: boolean;
}

export const ActionPill = ({
  label,
  name,
  control,
  value,
  isFeatured,
}: ActionPillProps) => {
  const { field } = useController({
    name,
    control,
  });

  const active = isFeatured
    ? field.value === value
    : (field.value ?? []).includes(value);

  const handleClick = () => {
    if (isFeatured) {
      field.onChange(value);
    } else {
      const current: string[] = field.value ?? [];

      if (current.includes(value)) {
        field.onChange(current.filter((v) => v !== value));
      } else {
        field.onChange([...current, value]);
      }
    }
  };

  return (
    <button
      type="button"
      className={classNames(styles.action_pill, {
        [styles.action_pill_active]: active,
      })}
      onClick={handleClick}
    >
      {label}
      {active && !isFeatured && <Icon icon="tick" />}
    </button>
  );
};