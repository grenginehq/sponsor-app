import { projectCategories } from "@/constants";
import styles from "./first_step.module.css";
import { ActionPill } from "@/components/ActionPill";
import { Control } from "react-hook-form";

interface FirstStepProps{
    control: Control<any>;
}
export const FirstStep = ({control}: FirstStepProps) => {
  return (
    <div>
      <h2 className={styles.first_step_heading}>
        What would you like to contribute towards?
      </h2>
      {
        projectCategories.map((category) => {
            return (
                <ActionPill name="category" control={control} label={category?.label} value={category?.value} />
            )
        })
      }
    </div>
  );
};
