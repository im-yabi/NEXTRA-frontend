import React from "react";

export default function Login() {
  return (
    <section className="login-page d-flex vh-100">
      {/* Left Section */}
      <div className="login-left d-flex flex-column justify-content-center align-items-center p-5 text-white">
        <h2 className="fw-bold mb-4">Get Codified with our <span className="text-warning">New Features!</span></h2>
        
        <div className="feature-grid">
          <div className="feature-box">CodeKata</div>
          <div className="feature-box">WebKata</div>
          <div className="feature-box">IDE</div>
          <div className="feature-box">Debugging</div>
          <div className="feature-box">Rewards</div>
          <div className="feature-box">Referral</div>
        </div>

        <img
          src="https://www.guvi.in/assets/D9FXhWwL-login-left-illustration.webp"
          alt="Features Illustration"
          className="img-fluid mt-4"
          style={{ maxWidth: "350px" }}
        />
      </div>

      {/* Right Section */}
      <div className="login-right bg-white d-flex flex-column justify-content-center p-5 flex-fill">
        <div className="w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h3 className="fw-bold mb-4">Login</h3>
          <p>
            Don’t have an account? <a href="/signup" className="text-success fw-bold">Signup</a>
          </p>

          {/* Google Sign-in Button */}
          <button className="btn btn-outline-dark w-100 mb-3">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Logo"
              style={{ width: "20px", marginRight: "8px" }}
            />
            Sign in with Google
          </button>

          <p className="text-center text-muted">Or Login with Email</p>

          {/* Login Form */}
          <form>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
              <a href="#" className="d-block mt-1 small text-success">Forgot password?</a>
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="keepLoggedIn" />
              <label htmlFor="keepLoggedIn" className="form-check-label">Keep me logged in</label>
            </div>

            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}
