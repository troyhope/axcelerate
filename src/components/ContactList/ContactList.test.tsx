import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ContactList from "./ContactList";

import { mockSections } from "../../mocks/contact-data";

describe("ContactList Component", () => {
  it("renders section headers and initial contacts", () => {
    render(<ContactList sections={mockSections} />);

    // Check for section headers
    expect(screen.getByText("Attended")).toBeInTheDocument();
    expect(screen.getByText("Absent")).toBeInTheDocument();

    // Check for initial contacts (by name)
    expect(screen.getByText("Dianne Russell")).toBeInTheDocument();
    expect(screen.getByText("Ronald Richards")).toBeInTheDocument();
    expect(screen.getByText("Jenny Wilson")).toBeInTheDocument();
    expect(screen.getByText("Ralph Edwards")).toBeInTheDocument();

    // Check search field is present (using correct placeholder)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it("filters contacts based on search input (startsWith)", async () => {
    const user = userEvent.setup();
    render(<ContactList sections={mockSections} />);

    // Find search input using correct placeholder
    const searchInput = screen.getByPlaceholderText(/search/i);

    // Search for 'R' (case-insensitive start)
    await user.type(searchInput, "R");

    // Should show Ronald and Ralph
    expect(screen.getByText("Ronald Richards")).toBeInTheDocument();
    expect(screen.getByText("Ralph Edwards")).toBeInTheDocument();

    // Should hide Dianne and Jenny
    expect(screen.queryByText("Dianne Russell")).not.toBeInTheDocument();
    expect(screen.queryByText("Jenny Wilson")).not.toBeInTheDocument();

    // Check section headers are still potentially visible (even if empty, depending on filtering logic)
    // Our logic hides empty sections during filtering, so let's confirm that
    expect(screen.getByText("Attended")).toBeInTheDocument(); // Ronald is here
    expect(screen.getByText("Absent")).toBeInTheDocument(); // Ralph is here

    // Clear search
    await user.clear(searchInput);
    expect(screen.getByText("Dianne Russell")).toBeInTheDocument(); // Should reappear
    expect(screen.getByText("Jenny Wilson")).toBeInTheDocument(); // Should reappear
  });

  it("shows emails when showEmails prop is true", () => {
    render(<ContactList sections={mockSections} showEmails={true} />);

    // Check for emails (use queryByText as they might be hidden otherwise)
    expect(screen.getByText("d.russell@example.com")).toBeInTheDocument();
    expect(screen.getByText("r.richards@example.com")).toBeInTheDocument();
    expect(screen.getByText("j.wilson@example.com")).toBeInTheDocument();
    expect(screen.getByText("r.edwards@example.com")).toBeInTheDocument();
  });

  it("hides emails when showEmails prop is false or omitted", () => {
    render(<ContactList sections={mockSections} />); // showEmails defaults to false

    expect(screen.queryByText("d.russell@example.com")).not.toBeInTheDocument();
    expect(
      screen.queryByText("r.richards@example.com")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("j.wilson@example.com")).not.toBeInTheDocument();
    expect(screen.queryByText("r.edwards@example.com")).not.toBeInTheDocument();
  });

  it("collapses and expands sections on header click", async () => {
    const user = userEvent.setup();
    render(<ContactList sections={mockSections} />);

    const attendedHeader = screen.getByText("Attended");
    const absentHeader = screen.getByText("Absent");

    // Initially, contacts should be visible
    expect(screen.getByText("Dianne Russell")).toBeVisible();
    expect(screen.getByText("Jenny Wilson")).toBeVisible();

    // Click 'Attended' header to collapse
    await user.click(attendedHeader);
    // Check if element is removed from the DOM
    expect(screen.queryByText("Dianne Russell")).not.toBeInTheDocument();
    expect(screen.getByText("Jenny Wilson")).toBeVisible(); // Should still be visible

    // Click 'Attended' header again to expand
    await user.click(attendedHeader);
    expect(screen.getByText("Dianne Russell")).toBeVisible(); // Should reappear

    // Click 'Absent' header to collapse
    await user.click(absentHeader);
    expect(screen.getByText("Dianne Russell")).toBeVisible();
    // Check if element is removed from the DOM
    expect(screen.queryByText("Jenny Wilson")).not.toBeInTheDocument();
  });

  it("highlights an item on click and deselects on second click", async () => {
    const user = userEvent.setup();
    render(<ContactList sections={mockSections} showEmails={false} />); // No emails for purple text

    const dianneItem = screen.getByText("Dianne Russell");
    const dianneButton = dianneItem.closest('[role="button"]');

    // Item should not be highlighted initially
    expect(dianneButton).not.toHaveAttribute("aria-pressed", "true");

    // Click Dianne to select
    await user.click(dianneItem); // Click the text element, event bubbles up
    expect(dianneButton).toHaveAttribute("aria-pressed", "true");

    // Click Dianne again to deselect
    await user.click(dianneItem);
    expect(dianneButton).not.toHaveAttribute("aria-pressed", "true");
  });
});
