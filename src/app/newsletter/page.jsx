'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    // For now, we'll just show a success message
    setSubmitted(true);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1" style={{ backgroundColor: '#E5E2D9' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow" style={{ 
                borderTop: '4px solid #1B3B21',
                padding: '2rem'
              }}>
                <div className="card-body">
                  <h1 style={{ 
                    color: '#1B3B21',
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    marginBottom: '0.5rem',
                    fontFamily: 'Crimson Text, serif'
                  }}>
                    ROYAL NEWSLETTER
                  </h1>
                  <p style={{
                    color: '#666',
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}>
                    Stay informed about exclusive healthcare benefits and rewards
                  </p>

                  {submitted ? (
                    <div className="text-center">
                      <h2 style={{ 
                        color: '#B4975A',
                        fontSize: '1.5rem',
                        marginBottom: '1rem'
                      }}>
                        Thank You for Subscribing!
                      </h2>
                      <p>You will receive our royal updates shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label 
                          htmlFor="name"
                          className="form-label"
                          style={{ color: '#1B3B21', fontWeight: '500' }}
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          style={{ 
                            padding: '0.75rem',
                            borderColor: '#ddd'
                          }}
                        />
                      </div>

                      <div className="mb-4">
                        <label 
                          htmlFor="email"
                          className="form-label"
                          style={{ color: '#1B3B21', fontWeight: '500' }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          style={{ 
                            padding: '0.75rem',
                            borderColor: '#ddd'
                          }}
                        />
                      </div>

                      <button 
                        type="submit"
                        style={{
                          backgroundColor: '#B4975A',
                          color: 'white',
                          padding: '0.75rem 2rem',
                          border: 'none',
                          borderRadius: '6px',
                          width: '100%',
                          fontSize: '1.1rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        SUBSCRIBE TO NEWSLETTER
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="row mt-5 g-4">
                <div className="col-md-4">
                  <div className="card h-100" style={{ border: 'none' }}>
                    <div className="card-body text-center">
                      <h3 style={{ 
                        color: '#B4975A',
                        fontSize: '1.25rem',
                        marginBottom: '1rem'
                      }}>
                        Exclusive Updates
                      </h3>
                      <p className="text-muted">
                        Be the first to know about new healthcare benefits and services
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100" style={{ border: 'none' }}>
                    <div className="card-body text-center">
                      <h3 style={{ 
                        color: '#B4975A',
                        fontSize: '1.25rem',
                        marginBottom: '1rem'
                      }}>
                        Health Tips
                      </h3>
                      <p className="text-muted">
                        Receive expert health advice and wellness recommendations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100" style={{ border: 'none' }}>
                    <div className="card-body text-center">
                      <h3 style={{ 
                        color: '#B4975A',
                        fontSize: '1.25rem',
                        marginBottom: '1rem'
                      }}>
                        Special Offers
                      </h3>
                      <p className="text-muted">
                        Get access to member-only discounts and promotions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 