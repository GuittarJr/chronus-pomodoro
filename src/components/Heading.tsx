import React from "react";
import styles from "./Heading.module.css";

interface headingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: headingProps) {
  return (
    <>
      <h1 className={styles.heading}>{children}</h1>
    </>
  );
}
