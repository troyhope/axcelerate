import React, { useState, useMemo } from "react";
import SearchField from "../SearchField/SearchField";
import Section from "../Section/Section";
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

type Contact = {
  id: string | number;
  name: string;
  imageUrl: string;
  email?: string;
};

type ContactSectionData = {
  title: string;
  data: Contact[];
};

type ContactListProps = {
  sections: ContactSectionData[];
  showEmails?: boolean;
  initialSearchTerm?: string;
};

function ContactList({
  sections,
  showEmails = false,
  initialSearchTerm = "",
}: ContactListProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  // Add state for selected contact ID -- might show the selected contacts details in another component
  const [selectedContactId, setSelectedContactId] = useState<
    string | number | null
  >(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handler for clicking a contact item
  const handleContactClick = (id: string | number) => {
    // Toggle selection: if clicking the already selected one, deselect it
    setSelectedContactId((prevId) => (prevId === id ? null : id));
  };

  // Memoize the filtered sections to avoid recalculating on every render
  const filteredSections = useMemo(() => {
    if (!searchTerm) {
      return sections;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return sections
      .map((section) => ({
        ...section,
        data: section.data.filter((contact) =>
          contact.name.toLowerCase().startsWith(lowerCaseSearchTerm)
        ),
      }))
      .filter((section) => section.data.length > 0);
  }, [searchTerm, sections]);

  return (
    <div className={styles.contactList}>
      <SearchField
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
      />

      {filteredSections.map((section) => (
        <Section key={section.title} title={section.title}>
          {section.data.map((contact) => (
            <ContactListItem
              key={contact.id}
              id={contact.id}
              imageUrl={contact.imageUrl}
              name={contact.name}
              email={showEmails ? contact.email : undefined}
              isHighlighted={selectedContactId === contact.id}
              onClick={handleContactClick}
            />
          ))}
        </Section>
      ))}

      {filteredSections.length === 0 && searchTerm && (
        <p className={styles.noContacts}>
          No contacts found for "{searchTerm}".
        </p>
      )}
    </div>
  );
}

export default ContactList;
