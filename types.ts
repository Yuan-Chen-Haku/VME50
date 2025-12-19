export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Email {
  id: string;
  sender: User;
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  isRead: boolean;
  folder: 'inbox' | 'sent' | 'archive' | 'trash';
  tags: string[];
}

export interface Folder {
  id: string;
  name: string;
  icon: any; // React Component type
  count?: number;
}