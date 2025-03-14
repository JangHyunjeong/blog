import type { Metadata } from 'next';
import './globals.css';
import './tailwind.css';
import Container from '@/components/layout/Container';
import Head from 'next/head';

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
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </Head>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
