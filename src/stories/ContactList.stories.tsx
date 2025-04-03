import type { Meta, StoryObj } from "@storybook/react";
import ContactList from "../components/ContactList/ContactList";
import { mockSections } from "../mocks/contact-data";

const meta = {
  title: "Features/ContactList",
  component: ContactList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    sections: { control: false },
    showEmails: { control: "boolean" },
    initialSearchTerm: { control: "text" },
  },
} satisfies Meta<typeof ContactList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default view, emails hidden
export const Default: Story = {
  args: {
    sections: mockSections,
    showEmails: false,
  },
};

// View with emails shown
export const WithEmails: Story = {
  args: {
    sections: mockSections,
    showEmails: true,
  },
};

// View with an initial search term applied
export const PreFiltered: Story = {
  args: {
    sections: mockSections,
    showEmails: true,
    initialSearchTerm: "r", // Example search term
  },
};

// View simulating no contacts
export const Empty: Story = {
  args: {
    sections: [],
    showEmails: true,
  },
};
