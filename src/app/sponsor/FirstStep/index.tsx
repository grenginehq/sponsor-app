import { projectCategories } from "@/constants";
import styles from "./first_step.module.css";
import { ActionPill } from "@/components/ActionPill";
import { Control } from "react-hook-form";
import Image from "next/image";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

interface FirstStepProps {
  control: Control<any>;
  handleScreenChange: (screen: "firstStep" | "secondStep") => void;
}
export const FirstStep = ({ control, handleScreenChange }: FirstStepProps) => {
  return (
    <div className={styles.first_step}>
      <form className={styles.first_step_form}>
        <Input
          variant="filled"
          type="email"
          name="email"
          control={control}
          label="Email Address"
        />
        <h2 className={styles.first_step_heading}>
          What would you like to contribute towards?
        </h2>
        <div className={styles.first_step_pill_list}>
          {projectCategories.map((category, index) => {
            return (
              <ActionPill
                key={`action_${index + 1}`}
                name="category"
                control={control}
                label={category?.label}
                value={category?.value}
              />
            );
          })}
        </div>
        <div className={styles.first_step_button}>
          <Button
            handleClick={() => handleScreenChange("secondStep")}
            type="button"
            variant="primary"
            label="Next"
          />
        </div>
      </form>
      <div className={styles.first_step_image}>
        <Image
          src={"/assets/images/volunteer_1.png"}
          alt={"volunteer_1"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
