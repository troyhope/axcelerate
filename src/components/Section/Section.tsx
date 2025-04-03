import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Section.module.css";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  initialCollapsed?: boolean;
};

function Section({ title, children, initialCollapsed = false }: SectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.section}>
      <SectionHeader
        title={title}
        isCollapsed={isCollapsed}
        onClick={toggleCollapse}
      />
      {!isCollapsed && <div className={styles.sectionContent}>{children}</div>}
    </div>
  );
}

export default Section;
