'use client';

import React from 'react';
import Image from 'next/image';

export default function Header() {
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
              onError={(e) => {
                console.error('Image failed to load:', e);
              }}
            />
            <span className="brand-text">SAINT DANIELS</span>
          </div>
        </a>
        
        <a className="btn login-btn" href="/login">Login</a>
      </div>
    </nav>
  );
} 