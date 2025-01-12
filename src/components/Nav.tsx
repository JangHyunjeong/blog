import Link from 'next/link';
import navLinks from '@/data/navLinks';

export default function Nav() {
  return (
    <nav>
      <ul>
        {navLinks.map((nav) => (
          <li key={nav.title}>
            <Link href={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
