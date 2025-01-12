import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">My Blog</Link>
      </h1>
      <Nav />
    </header>
  );
}
