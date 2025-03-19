'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="navbar" style={{ backgroundColor: '#2B4C35', borderBottom: '1px solid #3c5c45' }}>
      <div className="container py-2">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div className="d-flex align-items-center gap-3">
            <Image 
              src="/saintdanielslogo.png" 
              alt="Saint Daniels Logo" 
              width={48}
              height={48}
              priority
              unoptimized
              style={{
                filter: isHomePage ? 'brightness(0) saturate(100%) invert(70%) sepia(11%) saturate(1091%) hue-rotate(358deg) brightness(89%) contrast(85%)' : 'none'
              }}
              onError={(e) => {
                console.error('Image failed to load:', e);
              }}
            />
            <span style={{ 
              color: '#B4975A',
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              letterSpacing: '0.5px'
            }}>
              SAINT DANIELS
            </span>
          </div>
        </a>
        
        <a className="btn login-btn" href="/login">Login</a>
      </div>
    </nav>
  );
} 