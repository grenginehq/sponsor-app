import { Control, useController } from "react-hook-form";
import { Icon } from "@/components/Icon";
import styles from "./search.module.css";
interface SearchProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
}
const Search = ({ name, control, placeholder }: SearchProps) => {
  const { field } = useController({ control, name });
  return (
    <div className={styles.search}>
      <input
        className={styles.search_input}
        {...field}
        type="search"
        placeholder={placeholder}
      />
      <button className={styles.search_input_button} type="button">
        <Icon icon="searchBold" />
      </button>
    </div>
  );
};

export default Search;
