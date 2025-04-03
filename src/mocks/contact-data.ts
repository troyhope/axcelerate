// Define data structures (can be shared types later if needed)
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

// Mock data
export const mockContacts = {
  attended: [
    {
      id: "1",
      name: "Dianne Russell",
      imageUrl: "https://i.pravatar.cc/150?img=1",
      email: "d.russell@example.com",
    },
    {
      id: "2",
      name: "Ronald Richards",
      imageUrl: "https://i.pravatar.cc/150?img=2",
      email: "r.richards@example.com",
    },
    {
      id: "3",
      name: "Arlene McCoy",
      imageUrl: "https://i.pravatar.cc/150?img=3",
      email: "a.mccoy@example.com",
    },
    {
      id: "4",
      name: "Kathryn Murphy",
      imageUrl: "https://i.pravatar.cc/150?img=4",
      email: "k.murphy@example.com",
    },
    {
      id: "5",
      name: "Savannah Nguyen",
      imageUrl: "https://i.pravatar.cc/150?img=5",
      email: "s.nguyen@example.com",
    },
    {
      id: "6",
      name: "Albert Flores",
      imageUrl: "https://i.pravatar.cc/150?img=6",
      email: "a.flores@example.com",
    },
  ],
  absent: [
    {
      id: "7",
      name: "Jenny Wilson",
      imageUrl: "https://i.pravatar.cc/150?img=7",
      email: "j.wilson@example.com",
    },
    {
      id: "8",
      name: "Wade Warren",
      imageUrl: "https://i.pravatar.cc/150?img=8",
      email: "w.warren@example.com",
    },
    {
      id: "9",
      name: "Bessie Cooper",
      imageUrl: "https://i.pravatar.cc/150?img=9",
      email: "b.cooper@example.com",
    },
    {
      id: "10",
      name: "Ralph Edwards",
      imageUrl: "https://i.pravatar.cc/150?img=10",
      email: "r.edwards@example.com",
    },
  ],
};

export const mockSections: ContactSectionData[] = [
  { title: "Attended", data: mockContacts.attended },
  { title: "Absent", data: mockContacts.absent },
];
