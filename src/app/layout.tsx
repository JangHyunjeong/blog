import type { Metadata } from 'next';
import './globals.css';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'jjang blog',
  description: '현정쓰 어썸 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
