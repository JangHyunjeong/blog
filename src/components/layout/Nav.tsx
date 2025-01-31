import Link from 'next/link';
import navLinks from '@/data/navLinks';

export default function Nav() {
  return (
    <nav>
      <ul className="flex justity-between align-middle gap-3">
        {navLinks.map((nav) => (
          <li key={nav.title}>
            <Link href={nav.link} className="font-medium p-3">
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
