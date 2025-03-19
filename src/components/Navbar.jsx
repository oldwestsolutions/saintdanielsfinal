'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav style={{ 
      backgroundColor: '#1B3B21',
      borderBottom: '1px solid #B4975A',
      padding: '1rem 0',
      position: 'relative',
      zIndex: 1000
    }}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="text-decoration-none d-flex align-items-center">
          <div style={{ 
            width: '45px', 
            height: '45px', 
            position: 'relative', 
            marginRight: '15px',
            filter: isHomePage ? 'brightness(0) saturate(100%) invert(70%) sepia(11%) saturate(1091%) hue-rotate(358deg) brightness(89%) contrast(85%)' : 'none'
          }}>
            <Image 
              src="/images/shield-white.png"
              alt="Saint Daniels"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span style={{ 
            color: '#B4975A', 
            fontSize: '1.75rem', 
            fontWeight: '500',
            letterSpacing: '1.5px',
            fontFamily: 'Crimson Text, serif'
          }}>
            SAINT DANIELS
          </span>
        </Link>
        {isHomePage && (
          <Link 
            href="/login" 
            className="text-decoration-none"
            style={{
              display: 'block',
              position: 'relative',
              zIndex: 1001
            }}
          >
            <button 
              style={{ 
                backgroundColor: '#B4975A', 
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '0.5rem 2rem',
                border: 'none',
                borderRadius: '6px'
              }}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
} 