import { Email, Folder } from './types';
import { Inbox, Send, Archive, Trash2, Tag, Star, AlertCircle } from 'lucide-react';

export const MOCK_USER = {
  id: 'u1',
  name: 'Alex Rivera',
  email: 'alex@nomamail.com',
  avatar: 'https://picsum.photos/id/64/200/200',
};

export const FOLDERS: Folder[] = [
  { id: 'inbox', name: 'Inbox', icon: Inbox, count: 4 },
  { id: 'sent', name: 'Sent', icon: Send },
  { id: 'archive', name: 'Archive', icon: Archive },
  { id: 'trash', name: 'Trash', icon: Trash2 },
];

export const TAGS = [
  { id: 'work', name: 'Work', color: 'bg-red-100 text-red-700' },
  { id: 'personal', name: 'Personal', color: 'bg-green-100 text-green-700' },
  { id: 'billing', name: 'Billing', color: 'bg-blue-100 text-blue-700' },
];

export const EMAILS: Email[] = [
  {
    id: '1',
    sender: { id: 's1', name: 'Sarah Chen', email: 'sarah@design.co', avatar: 'https://picsum.photos/id/101/200/200' },
    subject: 'Q4 Design Review Specs',
    preview: 'Hey Alex, I have attached the latest specs for the Q4 review. Let me know what you think about the new layout...',
    body: `Hi Alex,

I've attached the latest specs for the Q4 design review. We've made significant updates to the typography system and the color palette to align better with the new brand guidelines.

Key changes:
- Increased base font size to 16px
- Adjusted line-height ratios for better readability
- New secondary accent color: #5B21B6

Let me know if you have any feedback before the meeting tomorrow.

Best,
Sarah`,
    timestamp: '10:42 AM',
    isRead: false,
    folder: 'inbox',
    tags: ['Work']
  },
  {
    id: '2',
    sender: { id: 's2', name: 'Notion Calendar', email: 'team@makenotion.com', avatar: 'https://picsum.photos/id/102/200/200' },
    subject: 'Welcome to your new calendar',
    preview: 'Manage your time and work together. It connects directly to your Google Calendar accounts...',
    body: `Welcome to the future of time management.

We are thrilled to have you onboard. This tool is designed to help you organize your life with the same flexibility you expect from your favorite productivity tools.

Get started by syncing your Google Calendar.

Cheers,
The Team`,
    timestamp: 'Yesterday',
    isRead: true,
    folder: 'inbox',
    tags: ['Personal']
  },
  {
    id: '3',
    sender: { id: 's3', name: 'Stripe', email: 'receipts@stripe.com', avatar: 'https://picsum.photos/id/103/200/200' },
    subject: 'Receipt for your payment',
    preview: 'Thanks for your payment of $20.00 to SaaS Inc. This email confirms your transaction...',
    body: `Receipt #1234-5678

Amount Paid: $20.00
Date: Oct 24, 2023

If you have any questions, reply to this email.`,
    timestamp: 'Oct 24',
    isRead: true,
    folder: 'inbox',
    tags: ['Billing']
  },
  {
    id: '4',
    sender: { id: 's4', name: 'Product Hunt', email: 'hello@producthunt.com', avatar: 'https://picsum.photos/id/104/200/200' },
    subject: 'Top products from yesterday',
    preview: 'Here are the top hunted products from yesterday. Check out the new AI tools that are trending...',
    body: `Daily Digest

1. SuperTool AI - Generate unlimited assets
2. DevSpeed - Code 10x faster
3. HealthTrack - Monitor your vitals

See the full list on our website.`,
    timestamp: 'Oct 23',
    isRead: true,
    folder: 'inbox',
    tags: []
  },
   {
    id: '5',
    sender: { id: 's5', name: 'Mark Zuckerberg', email: 'zuck@meta.com', avatar: 'https://picsum.photos/id/106/200/200' },
    subject: 'Metaverse Update',
    preview: 'Just wanted to share some thoughts on where we are heading with the new headset...',
    body: `Hey,

Making good progress on the leg tracking.

- Mark`,
    timestamp: 'Oct 20',
    isRead: true,
    folder: 'archive',
    tags: ['Work']
  }
];