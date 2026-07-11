import { icons } from "../../../public/assets/icons/index";
import { IconNames } from "../../types/icon";
import styles from "./icon.module.css";
import classNames from "classnames";

interface IconProps {
  icon: IconNames;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  className,
}): React.ReactNode => {
  const iconClasses = classNames(styles.icon, className);
  return (
    <span
      aria-hidden={true}
      className={iconClasses}
      id="icon-element"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};
