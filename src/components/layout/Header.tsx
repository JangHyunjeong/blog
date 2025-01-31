import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-center">
      <div className="flex justify-between items-center h-16 max-w-5xl w-full">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Blog</Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
