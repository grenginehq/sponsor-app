import styles from "./progress_bar.module.css";

interface ProgressBarProps {
  totalReceived: number;
  totalAmount: number;
  currency: string;
}
export const ProgressBar = ({
  totalReceived,
  totalAmount,
  currency,
}: ProgressBarProps) => {
  const calculatedPercentage = (totalReceived / totalAmount) * 100;
  return (
    <div className={styles.progress_bar_container}>
      <div className={styles.progress_bar_text_container}>
        <p className={styles.progress_bar_percentage}>
          {calculatedPercentage}%
        </p>
        <p className={styles.progress_bar_amount}>
          {totalAmount}&nbsp;({currency})
        </p>
      </div>
      <div className={styles.progress_bar}>
        <div
          style={{ width: `${calculatedPercentage}%` }}
          className={styles.progress_bar_filled}
        ></div>
      </div>
    </div>
  );
};
