"use client";
import { Icon } from "@/components/Icon";
import styles from "./page.module.css";
import { FirstStep } from "./FirstStep";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Sponsor() {
  const { control } = useForm();
  return (
    <div className={styles.sponsor}>
      <header className={styles.sponsor_header}>
        <Icon icon="logo2" />
      </header>
      <FirstStep control={control} />
    </div>
  );
}
