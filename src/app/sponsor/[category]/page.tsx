"use client";
import { Icon } from "@/components/Icon";
import styles from "./page.module.css";
import { FirstStep } from "./FirstStep";
import { useForm } from "react-hook-form";
import { JSX, useState } from "react";
import { SecondStep } from "./SecondStep";

export default function SponsorCategory() {
  const { control, handleSubmit } = useForm();
  const [activeScreen, setActiveScreen] = useState<"firstStep" | "secondStep">(
    "firstStep",
  );

  const handleScreenChange = (screen: "firstStep" | "secondStep") => {
    setActiveScreen(screen);
  };
  const screens: Record<"firstStep" | "secondStep", JSX.Element> = {
    firstStep: (
      <FirstStep control={control} handleScreenChange={handleScreenChange} />
    ),
    secondStep: (
      <SecondStep
        handleSubmit={handleSubmit}
        control={control}
        handleScreenChange={handleScreenChange}
      />
    ),
  };

  return (
    <div className={styles.sponsor_category}>
      <header className={styles.sponsor_category_header}>
        <Icon icon="logo4" />
      </header>
      {screens[activeScreen]}
    </div>
  );
}
