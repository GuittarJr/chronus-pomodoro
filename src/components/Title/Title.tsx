import styles from "./Title.heading.module.css";
import { Timer } from "lucide-react";
type Title = {
  title: string;
};

export default function Title({ title }: Title) {
  return (
    <div className={styles.main_title}>
      <button>
        <Timer />
      </button>
      <h1>{title}</h1>
    </div>
  );
}
