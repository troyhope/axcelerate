import styles from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import { mockSections } from "./mocks/contact-data";

function App() {
  return (
    <main className={styles.appContainer}>
      <h1>Contact List Example</h1>
      <div className={styles.contactListContainer}>
        <ContactList sections={mockSections} showEmails={false} />
      </div>
    </main>
  );
}

export default App;
