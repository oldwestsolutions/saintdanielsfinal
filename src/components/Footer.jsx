import Image from 'next/image';

export default function Footer() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
    display: 'inline-block',
    marginBottom: '0.5rem',
    ':hover': {
      color: '#B4975A'
    }
  };

  const headingStyle = {
    color: '#B4975A',
    fontFamily: 'Crimson Text, serif',
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1.25rem'
  };

  return (
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
              <h3 style={headingStyle}>SAINT DANIELS</h3>
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
              <h4 style={{ ...headingStyle, color: '#B4975A' }}>MEMBERS</h4>
              <ul>
                <li><a href="/enrollment" style={linkStyle}>Enrollment</a></li>
                <li><a href="/login" style={linkStyle}>Login</a></li>
                <li><a href="#" style={linkStyle}>Benefits</a></li>
                <li><a href="#" style={linkStyle}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 style={{ ...headingStyle, color: '#B4975A' }}>RESOURCES</h4>
              <ul>
                <li><a href="#" style={linkStyle}>FAQs</a></li>
                <li><a href="#" style={linkStyle}>Support</a></li>
                <li><a href="/newsletter" style={linkStyle}>Newsletter</a></li>
                <li><a href="#" style={linkStyle}>Privacy</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 style={{ ...headingStyle, color: '#B4975A' }}>COMPANY</h4>
              <ul>
                <li><a href="#" style={linkStyle}>About Us</a></li>
                <li><a href="#" style={linkStyle}>Careers</a></li>
                <li><a href="#" style={linkStyle}>News</a></li>
                <li><a href="#" style={linkStyle}>Partners</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright" style={{ 
          textAlign: 'center',
          color: '#B4975A',
          fontSize: '0.8rem',
          marginTop: '2rem'
        }}>
          © {new Date().getFullYear()} Saint Daniels. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 