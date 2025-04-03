import Avatar from "../Avatar/Avatar";
import styles from "./ContactListItem.module.css";

type ContactListItemProps = {
  id: string | number;
  imageUrl: string;
  name: string;
  email?: string;
  isHighlighted?: boolean;
  onClick: (id: string | number) => void;
};

function ContactListItem({
  id,
  imageUrl,
  name,
  email,
  isHighlighted = false,
  onClick,
}: ContactListItemProps) {
  const baseClasses = styles.contactListItem;
  const highlightClass = isHighlighted ? styles.highlighted : "";
  // Add a specific class when highlighted AND no email is present
  const highlightNoEmailClass =
    isHighlighted && !email ? styles.highlightedNoEmail : "";

  // Combine all applicable classes
  const itemClasses =
    `${baseClasses} ${highlightClass} ${highlightNoEmailClass}`.trim();

  // Handler to call the parent onClick with this item's ID
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      className={itemClasses}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-pressed={isHighlighted}
    >
      <Avatar imageUrl={imageUrl} altText={`${name}'s avatar`} />
      <div className={styles.contactInfo}>
        <span className={styles.name}>{name}</span>
        {email && <span className={styles.email}>{email}</span>}
      </div>
    </div>
  );
}

export default ContactListItem;
