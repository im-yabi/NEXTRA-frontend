import React from "react";

export default function Signup() {
  return (
    <section className="signup-page d-flex vh-100">
      {/* Left Section */}
      <div className="signup-left d-flex flex-column justify-content-center align-items-start p-5 text-white">
        <h2 className="fw-bold mb-3">
          Get your <span className="text-warning">First Course for FREE</span> with GUVI!
        </h2>
        <ul className="list-unstyled mt-3">
          <li>✅ Sign up with GUVI.</li>
          <li>✅ Confirm your account through email.</li>
          <li>✅ Receive a unique coupon code in Welcome Email.</li>
          <li>✅ Use the coupon to avail your first Premium course at no cost.</li>
        </ul>

        <img
          src="https://www.guvi.in/assets/DW73x9yA-signup-illustration.webp"
          alt="Signup Illustration"
          className="img-fluid mt-4"
          style={{ maxWidth: "350px" }}
        />
      </div>

      {/* Right Section */}
      <div className="signup-right bg-white d-flex flex-column justify-content-center p-5 flex-fill">
        <div className="w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h3 className="fw-bold mb-4">Sign Up</h3>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-success fw-bold">Login</a>
          </p>

          <p className="text-center text-muted">Or Sign Up with Email</p>

          {/* Signup Form */}
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" />
              <small className="text-success">*This name will appear in certificates</small>
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input type="text" className="form-control" placeholder="Enter your mobile number" />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
}
