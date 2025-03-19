import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Login() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1" style={{ backgroundColor: '#E5E2D9' }}>
        <div className="container py-5">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '65vh' }}>
            <div className="col-md-6 col-lg-4">
              <div className="card shadow" style={{ borderTop: '4px solid #1B3B21' }}>
                <div className="card-body p-4">
                  <h1 className="text-center mb-2" style={{ color: '#1B3B21', fontSize: '2.5rem', fontWeight: 'bold' }}>
                    WELCOME BACK
                  </h1>
                  <h2 className="text-center mb-4" style={{ color: '#1B3B21' }}>
                    Royal Member
                  </h2>
                  
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label" style={{ color: '#1B3B21' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label" style={{ color: '#1B3B21' }}>
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="btn w-100 mb-3"
                      style={{ backgroundColor: '#B4975A', color: 'white' }}
                    >
                      SIGN IN
                    </button>
                  </form>
                  
                  <div className="d-flex justify-content-between mb-4">
                    <a href="#" className="text-decoration-none" style={{ color: '#1B3B21' }}>
                      Forgot password
                    </a>
                    <a href="#" className="text-decoration-none" style={{ color: '#1B3B21' }}>
                      Contact support
                    </a>
                  </div>

                  <button
                    className="btn w-100"
                    style={{ 
                      border: '2px solid #1B3B21',
                      color: '#1B3B21'
                    }}
                  >
                    JOIN THE KINGDOM
                  </button>
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