'use client';

import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section py-4" style={{ backgroundColor: '#1B3B21' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="hero-image-container">
                  <Image 
                    src="/images/royal-portrait.jpg"
                    alt="Royal Healthcare"
                    width={600}
                    height={400}
                    className="img-fluid rounded-3 shadow-lg"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-md-6 text-md-start">
                <h1 className="hero-title" style={{ 
                  color: '#B4975A',
                  fontSize: '3.5rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  marginBottom: '1.5rem',
                  fontFamily: 'Crimson Text, serif'
                }}>
                  ROYAL<br />HEALTHCARE
                </h1>
                <p className="hero-text" style={{ 
                  color: 'white',
                  fontSize: '1.25rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  Earn points with every healthcare decision and redeem them for exclusive rewards. Experience healthcare fit for royalty with Saint Daniels.
                </p>
                <Link href="/enrollment" className="text-decoration-none">
                  <button className="btn join-btn" style={{
                    backgroundColor: '#B4975A',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    borderRadius: '6px',
                    border: 'none',
                    transition: 'all 0.2s ease'
                  }}>
                    JOIN THE KINGDOM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Royal Benefits Section */}
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #E5E2D9 0%, #FFFFFF 100%)' }}>
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: '#1B3B21', fontSize: '2.5rem', fontWeight: 'bold' }}>
              ROYAL BENEFITS
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-5">
                    <div className="benefit-icon mb-4" style={{ color: '#B4975A', fontSize: '3rem' }}>
                      👑
                    </div>
                    <h3 className="card-title h4 mb-3" style={{ color: '#1B3B21' }}>Premium Rewards</h3>
                    <p className="card-text">Unlock exclusive healthcare services, products, and experiences with your earned points.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-5">
                    <div className="benefit-icon mb-4" style={{ color: '#B4975A', fontSize: '3rem' }}>
                      ⚜️
                    </div>
                    <h3 className="card-title h4 mb-3" style={{ color: '#1B3B21' }}>Royal Treatment</h3>
                    <p className="card-text">Priority scheduling, personalized care plans, and VIP healthcare experiences await you.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-5">
                    <div className="benefit-icon mb-4" style={{ color: '#B4975A', fontSize: '3rem' }}>
                      ❤️
                    </div>
                    <h3 className="card-title h4 mb-3" style={{ color: '#1B3B21' }}>Wellness Incentives</h3>
                    <p className="card-text">Earn rewards for maintaining your health and wellness goals. Our program celebrates your commitment to a healthier lifestyle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #1B3B21 0%, #2B4C35 100%)' }}>
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: '#B4975A', fontSize: '2.5rem', fontWeight: 'bold' }}>
              ROYAL DECREE: HOW IT WORKS
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center p-4 process-card">
                  <div className="process-number mb-4">1</div>
                  <h3 style={{ color: '#B4975A', marginBottom: '1rem' }}>Join The Kingdom</h3>
                  <p style={{ color: 'white' }}>Register for a Saint Daniels account and link your healthcare providers.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4 process-card">
                  <div className="process-number mb-4">2</div>
                  <h3 style={{ color: '#B4975A', marginBottom: '1rem' }}>Earn Royal Points</h3>
                  <p style={{ color: 'white' }}>Collect points for healthcare visits, wellness activities, and healthy choices.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4 process-card">
                  <div className="process-number mb-4">3</div>
                  <h3 style={{ color: '#B4975A', marginBottom: '1rem' }}>Claim Your Treasures</h3>
                  <p style={{ color: 'white' }}>Redeem your points for healthcare rewards and exclusive benefits.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Royal Treasures Section */}
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E5E2D9 100%)' }}>
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: '#1B3B21', fontSize: '2.5rem', fontWeight: 'bold' }}>
              ROYAL TREASURES
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card treasure-card h-100 border-0 shadow-lg">
                  <div className="card-body p-4">
                    <div className="treasure-icon mb-4">🏋️‍♂️</div>
                    <h3 className="card-title h5 mb-3">Premium Gym Access</h3>
                    <div className="points-badge mb-3">5,000 Points</div>
                    <p className="card-text">Get access to premium gym facilities to support your fitness journey.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card treasure-card h-100 border-0 shadow-lg">
                  <div className="card-body p-4">
                    <div className="treasure-icon mb-4">💝</div>
                    <h3 className="card-title h5 mb-3">Wellness Gift Card</h3>
                    <div className="points-badge mb-3">500 Points</div>
                    <p className="card-text">Redeem your points for a gift card to use on health and wellness products.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card treasure-card h-100 border-0 shadow-lg">
                  <div className="card-body p-4">
                    <div className="treasure-icon mb-4">⌚</div>
                    <h3 className="card-title h5 mb-3">Royal Health Tech</h3>
                    <div className="points-badge mb-3">2,000 Points</div>
                    <p className="card-text">Premium health monitoring devices to keep track of your vital health metrics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 