import React, { ReactNode } from 'react';
import Header from './Header';

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}
