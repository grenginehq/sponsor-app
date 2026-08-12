import { projectCategories } from "@/constants";
import styles from "./second_step.module.css";
import { Control, FieldValues, UseFormHandleSubmit } from "react-hook-form";
import Image from "next/image";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

interface SecondStepProps {
  control: Control<any>;
  handleScreenChange: (screen: "firstStep" | "secondStep" | "checkout") => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
}
export const SecondStep = ({
  control,
  handleScreenChange,
}: SecondStepProps) => {
  const handleFormSubmit = () => {
    handleScreenChange("checkout");
  };
  return (
    <div className={styles.second_step}>
      <form onSubmit={handleFormSubmit} className={styles.second_step_form}>
        <Input
          variant="filled"
          type="number"
          name="amount"
          control={control}
          label="Amount (in digits only)"
        />
        <Input
          variant="filled"
          type="text"
          name="reference"
          control={control}
          label="Reference"
        />

        <div className={styles.second_step_buttons}>
          <button
            onClick={() => handleScreenChange("firstStep")}
            className={styles.second_step_previous_button}
            type="button"
          >
            Previous
          </button>
          <Button type="submit" variant="primary" label="Submit" />
        </div>
      </form>
      <div className={styles.second_step_image}>
        <Image
          src={"/assets/images/volunteer_2.png"}
          alt={"volunteer_2"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
