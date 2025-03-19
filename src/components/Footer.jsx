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
    <footer style={{ 
      backgroundColor: '#1B3B21',
      borderTop: '1px solid #B4975A',
      padding: '3rem 0 2rem',
      color: 'white',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3">
            <h5 style={headingStyle}>SAINT DANIELS</h5>
            <p style={{ 
              fontSize: '0.9rem',
              lineHeight: '1.6',
              marginBottom: '1rem',
              color: 'rgba(255,255,255,0.9)'
            }}>
              Royal healthcare solutions, ensuring quality care and exclusive benefits for our members.
            </p>
          </div>
          
          <div className="col-md-3">
            <h5 style={headingStyle}>MEMBERS</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="/enrollment" style={linkStyle}>Enrollment</a></li>
              <li><a href="/login" style={linkStyle}>Login</a></li>
              <li><a href="#" style={linkStyle}>Benefits</a></li>
              <li><a href="#" style={linkStyle}>Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 style={headingStyle}>RESOURCES</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#" style={linkStyle}>FAQs</a></li>
              <li><a href="#" style={linkStyle}>Support</a></li>
              <li><a href="#" style={linkStyle}>Terms</a></li>
              <li><a href="#" style={linkStyle}>Privacy</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 style={headingStyle}>COMPANY</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#" style={linkStyle}>About Us</a></li>
              <li><a href="#" style={linkStyle}>Careers</a></li>
              <li><a href="#" style={linkStyle}>News</a></li>
              <li><a href="#" style={linkStyle}>Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p style={{ 
              fontSize: '0.8rem',
              color: '#B4975A',
              margin: 0
            }}>
              © {new Date().getFullYear()} Saint Daniels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 