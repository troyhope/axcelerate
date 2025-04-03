import React from "react";
import styles from "./SearchField.module.css";
import SearchIcon from "../../assets/search-icon.svg?react";

type SearchFieldProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

function SearchField({
  value,
  onChange,
  placeholder = "Search",
}: SearchFieldProps) {
  return (
    <div className={styles.searchFieldContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchField;
