import styles from "./SectionHeader.module.css";
import BaseChevronIcon from "../../assets/chevron-icon.svg?react";

// Wrapper component to apply dynamic classes
const ChevronIcon = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const iconClasses = `${styles.icon} ${
    isCollapsed ? styles.iconCollapsed : ""
  }`;
  // Pass the dynamic className to the imported SVG component
  return <BaseChevronIcon className={iconClasses} />;
};

type SectionHeaderProps = {
  title: string;
  isCollapsed: boolean;
  onClick: () => void;
};

function SectionHeader({ title, isCollapsed, onClick }: SectionHeaderProps) {
  return (
    <div
      className={styles.sectionHeader}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={!isCollapsed}
    >
      <span className={styles.title}>{title}</span>
      <ChevronIcon isCollapsed={isCollapsed} />
    </div>
  );
}

export default SectionHeader;
