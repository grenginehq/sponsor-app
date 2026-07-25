import { Control, useController, FieldValues, Path } from "react-hook-form";
import styles from "./checkbox.module.css";

interface CheckboxProps<T extends FieldValues = FieldValues> {
  id: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  value?: string;
}

const Checkbox = <T extends FieldValues = FieldValues>({
  id,
  name,
  label,
  control,
  value,
}: CheckboxProps<T>) => {
  const { field } = useController({ control, name });
  const { onChange, value: fieldValue } = field;

  return (
    <div className={styles.checkbox}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...field}
        checked={fieldValue || false}
        onChange={(event) => {
          onChange(event?.target?.checked);
        }}
        type="checkbox"
      />
    </div>
  );
};

export default Checkbox;
