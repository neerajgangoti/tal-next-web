'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header(){
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container navbar">
        <div className="brand">
          <Link href={'/'}><Image src="/logo.png" alt="The ArtLogic" width={130} height={34} priority /></Link>
          
        </div>
        <nav className="navlinks" aria-label="Main">
          {links.map(({href, label}) => (
            <Link key={href} className={pathname===href ? 'active' : ''} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
