"use client";
import { Control, useController } from "react-hook-form";
import styles from "./action_pill.module.css";
import { useState } from "react";
import classNames from "classnames";
import { Icon } from "../Icon";

interface ActionPillProps {
  label: string;
  control: Control<any>;
  name: string;
  value: string;
}

export const ActionPill = ({ label, name, control }: ActionPillProps) => {
  const { field } = useController({ name, control });
  const [toggleActionPill, setToggleActionPill] = useState(false);

  const handleToggle = () => {
    setToggleActionPill(!toggleActionPill);
  };

  const actionPillClasses = classNames(styles.action_pill, {
    [styles.action_pill_active]: toggleActionPill === true,
  });

  return (
    <button
      type="button"
      className={styles.actionPillClasses}
      onClick={handleToggle}
    >
      {label}
      {toggleActionPill && <Icon icon="tick" />}
    </button>
  );
};
