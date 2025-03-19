'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1B3B21' }}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <Image 
            src="/images/saintdanielslogo.png" 
            alt="Saint Daniels" 
            width={50} 
            height={50}
            className="me-2"
          />
          <span style={{ color: '#B4975A', fontSize: '1.25rem', fontWeight: '600' }}>
            SAINT DANIELS
          </span>
        </Link>
        {!isLoginPage && (
          <Link href="/login" className="text-decoration-none">
            <button 
              className="btn"
              style={{ backgroundColor: '#B4975A', color: 'white' }}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
} 