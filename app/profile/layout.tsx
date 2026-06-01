import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile | Premium Portfolio',
  description: 'Manage your portfolio profile.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
