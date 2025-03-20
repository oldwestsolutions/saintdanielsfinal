'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Join Kingdom Section */}
      <section className="join-kingdom-section">
        <div className="container text-center">
          <h2 className="kingdom-title" style={{ 
            color: '#B4975A',
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            fontFamily: 'Crimson Text, serif'
          }}>
            JOIN THE HEALTHCARE KINGDOM
          </h2>
          <p className="kingdom-text">
            Take control of your healthcare journey with rewards fit for royalty. Sign up today and begin earning points<br />
            towards a healthier, more rewarding future.
          </p>
          <button className="btn begin-journey-btn">BEGIN YOUR ROYAL JOURNEY</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-section">
              <div className="footer-brand">
                <Image 
                  src="/saintdanielslogo.png" 
                  alt="Saint Daniels Logo" 
                  width={64}
                  height={64}
                  priority
                  unoptimized
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(70%) sepia(11%) saturate(1091%) hue-rotate(358deg) brightness(89%) contrast(85%)'
                  }}
                />
                <h3 style={{ 
                  color: '#B4975A',
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '1.75rem',
                  fontWeight: '500',
                  letterSpacing: '1.5px',
                  margin: 0
                }}>
                  SAINT DANIELS
                </h3>
              </div>
              <div className="social-links">
                <a href="#" className="social-btn">FB</a>
                <a href="#" className="social-btn">IN</a>
                <a href="#" className="social-btn">SC</a>
                <a href="#" className="social-btn">TT</a>
                <a href="#" className="social-btn">IG</a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 style={{ 
                  color: '#B4975A',
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1.25rem'
                }}>MEMBERS</h4>
                <ul>
                  <li><a href="/newsletter">Newsletter</a></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 style={{ 
                  color: '#B4975A',
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1.25rem'
                }}>RESOURCES</h4>
                <ul>
                  <li><a href="#">Documents</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 style={{ 
                  color: '#B4975A',
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1.25rem'
                }}>COMPANY</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} Saint Daniels. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
} 