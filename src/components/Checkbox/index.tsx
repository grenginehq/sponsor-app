"use client";
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
} from "react-hook-form";
import styles from "./checkbox.module.css";

interface CheckboxProps<T extends FieldValues> {
  id: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}

const Checkbox = <T extends FieldValues>({
  id,
  name,
  label,
  control,
  value,
  checked,
  indeterminate,
  onCheckedChange,
  style,
}: CheckboxProps<T>) => {
  const {
    field: { value: fieldValue, onChange, onBlur, ref },
  } = useController({
    name,
    control,
  });

  const isArrayMode = Array.isArray(fieldValue) && value !== undefined;

  const isChecked = isArrayMode
    ? fieldValue.includes(value)
    : (checked ?? !!fieldValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = event.target.checked;

    if (onCheckedChange) {
      onCheckedChange(nextChecked);
      return;
    }

    if (isArrayMode) {
      const currentValues = fieldValue as string[];

      const nextValues = nextChecked
        ? [...currentValues, value]
        : currentValues.filter((item) => item !== value);

      onChange(nextValues as PathValue<T, Path<T>>);
      return;
    }

    onChange(nextChecked);
  };

  return (
    <div style={style} className={styles.checkbox}>
      <label htmlFor={id}>
        <input
          id={id}
          ref={ref}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
