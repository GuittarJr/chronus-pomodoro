import styles from "./Heading.module.css";

type Title = {
  title: string;
  children: React.ReactNode;
};

export default function Heading({ title, children }: Title) {
  return (
    <div className={styles.main_title}>
      {children}
      <h1>{title}</h1>
    </div>
  );
}
