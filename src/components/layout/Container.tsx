import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto w-full py-14">{props.children}</main>
      <Footer />
    </div>
  );
}
