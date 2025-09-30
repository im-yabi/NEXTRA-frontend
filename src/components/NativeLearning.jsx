import React from "react";

export default function NativeLearning() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://www.guvi.in/assets/DUN3iNaq-women-with-notebook-latest.webp"
              alt="Native Learning"
              className="img-fluid rounded"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">
              Leading EdTech Platform for <br /> Learning in Native Languages.
            </h2>
            <p className="text-muted">
              GUVI-HCL, backed by IIT-M, IIM-A, and HCL, is India’s top
              tech-driven EdTech platform for learning in regional and global
              languages. With 3M+ learners worldwide, it offers personalized
              online learning, upskilling, and job opportunities.
            </p>
            <p className="fw-bold text-success">
              NEXTRA – <span className="text-dark">Next Generation </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
