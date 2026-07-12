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
        <Icon icon="logo" />
      </header>
      <div className={styles.sponsor_form}>
        <FirstStep control={control} />
        <div className={styles.sponsor_form_image}>
          <Image
            src={"/assets/images/abstract_1.png"}
            alt={"abstract_1"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
