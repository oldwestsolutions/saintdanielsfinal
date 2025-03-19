'use client';

import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 hero-content">
                <h1 className="hero-title">
                  ROYAL<br />HEALTHCARE
                </h1>
                <p className="hero-text">
                  Earn points with every healthcare decision and redeem them for exclusive rewards. Experience healthcare fit for royalty with Saint Daniels.
                </p>
                <button className="btn join-btn">JOIN THE KINGDOM</button>
              </div>
              <div className="col-md-6 hero-image">
                <div className="image-placeholder">
                  {/* Add your image here */}
                  <div className="placeholder-text">Hero Image</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Royal Benefits Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center display-4 mb-5">ROYAL BENEFITS</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 text-center p-4">
                  <div className="card-body">
                    <div className="mb-3">🎁</div>
                    <h3 className="card-title h4">Premium Rewards</h3>
                    <p className="card-text">Unlock exclusive healthcare services, products, and experiences with your earned points.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center p-4">
                  <div className="mb-3">👑</div>
                  <h3 className="card-title h4">Royal Treatment</h3>
                  <p className="card-text">Priority scheduling, personalized care plans, and VIP healthcare experiences await you.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center p-4">
                  <div className="mb-3">❤️</div>
                  <h3 className="card-title h4">Wellness Incentives</h3>
                  <p className="card-text">Earn rewards for maintaining your health and wellness goals. Our program encourages and celebrates your commitment to a healthier lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-5" style={{ backgroundColor: '#D2BC9B' }}>
          <div className="container">
            <h2 className="text-center display-4 mb-5">ROYAL DECREE: HOW IT WORKS</h2>
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <div className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>1</div>
                <h3>Join The Kingdom</h3>
                <p>Register for a Saint Daniels account and link your healthcare providers.</p>
              </div>
              <div className="col-md-4 text-center">
                <div className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>2</div>
                <h3>Earn Royal Points</h3>
                <p>Collect points for healthcare visits, wellness activities, and healthy choices.</p>
              </div>
              <div className="col-md-4 text-center">
                <div className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>3</div>
                <h3>Claim Your Treasures</h3>
                <p>Redeem your points for healthcare rewards and exclusive benefits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Royal Treasures Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center display-4 mb-5">ROYAL TREASURES</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100">
                  <img src="/gym-access.jpg" className="card-img-top" alt="Premium Gym Access" />
                  <div className="card-body">
                    <h3 className="card-title h5">Premium Gym Access</h3>
                    <div className="badge bg-warning text-dark mb-2">5,000 Points</div>
                    <p className="card-text">Get access to premium gym facilities to support your fitness journey.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <img src="/walgreens.jpg" className="card-img-top" alt="Walgreens Gift Card" />
                  <div className="card-body">
                    <h3 className="card-title h5">$5 Walgreens Gift Card</h3>
                    <div className="badge bg-warning text-dark mb-2">500 Points</div>
                    <p className="card-text">Redeem your points for a Walgreens gift card to use on health and wellness products.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <img src="/health-tech.jpg" className="card-img-top" alt="Royal Health Tech" />
                  <div className="card-body">
                    <h3 className="card-title h5">Royal Health Tech</h3>
                    <div className="badge bg-warning text-dark mb-2">2000 Points</div>
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