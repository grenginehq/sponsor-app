import styles from "./pill.module.css";

interface PillProps {
    label: string;
}

export const Pill = ({label}: PillProps) => {
    return (
        <div className={styles.pill}>{label}</div>

    )
}