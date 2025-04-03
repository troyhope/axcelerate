# aXcelerate Frontend Challenge: Contact List Component

This project implements a reusable React contact list component based on the provided Figma design, documented with Storybook and tested with Jest/React Testing Library.

## Project Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

## Available Scripts

### Running the Development Server

To start the Vite development server and view the component integrated (if applicable, e.g., in `App.tsx`):

```bash
npm run dev
```

This will typically open the application in your browser at `http://localhost:5173`.

### Viewing Storybook Documentation

To run Storybook and view the interactive component documentation:

```bash
npm run storybook
```

This will typically open Storybook in your browser at `http://localhost:6006`.

### Running Unit Tests

To execute the Jest unit tests:

```bash
npm test
```

This will run the tests defined in `*.test.tsx` files and display the results in the console, along with coverage information.

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS Modules
- Storybook
- Jest + React Testing Library

## Component Structure

Components are located in `src/components/`:

- `ContactList`: Main orchestrating component.
- `SearchField`: Input field for filtering.
- `Section`: Collapsible section containing a header and items.
- `SectionHeader`: Clickable header for each section.
- `ContactListItem`: Displays individual contact information.
- `Avatar`: Displays the contact's image.

Icons (.svg) are stored in `src/assets/`.
