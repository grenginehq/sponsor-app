"use client";
import { Icon } from "@/components/Icon";
import styles from "./page.module.css";
import { FirstStep } from "./FirstStep";
import { useForm } from "react-hook-form";
import { JSX, useEffect, useState } from "react";
import { SecondStep } from "./SecondStep";
import { useParams } from "next/navigation";
import { Checkout } from "./Checkout";

export default function SponsorCategory() {
  const params = useParams();
  const { control, handleSubmit, reset } = useForm<any>({
    defaultValues: {
      categories: [],
    },
  });

  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  useEffect(() => {
    if (category) {
      reset({
        categories: [category.toUpperCase()],
      });
    }
  }, [category, reset]);

  const [activeScreen, setActiveScreen] = useState<"firstStep" | "secondStep" | "checkout">(
    "firstStep",
  );

  const handleScreenChange = (screen: "firstStep" | "secondStep" | "checkout") => {
    setActiveScreen(screen);
  };
  const screens: Record<"firstStep" | "secondStep" | "checkout", JSX.Element> = {
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
    checkout: <Checkout />
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
