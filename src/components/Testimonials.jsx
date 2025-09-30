// src/components/Testimonials.jsx
import React from "react";

export default function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h3 className="mb-2">What Our Learners Are Saying!</h3>

        {/* Google Rating */}
        <div className="mb-4">
          <img
            src="https://www.guvi.in/assets/BWZD7RpZ-google-logo.webp"
            alt="Google Logo"
            width="40"
            className="mb-2"
          />
          <h5 className="fw-bold">Rated 4.3/5.0</h5>
          <p className="small text-muted mb-0">More than 2500 Google Reviews</p>
        </div>

        {/* Carousel */}
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">

            {/* Slide 1 — SRI HARI K (video) */}
            <div className="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="card p-4 shadow-sm h-100 bg-white">
                    <h5 className="fw-bold">SRI HARI K</h5>
                    <p className="text-muted mb-3">Full Stack Developer</p>
                    <div className="ratio ratio-16x9 mb-3">
                      <iframe
                        src="https://www.youtube.com/embed/LXp2yzKT3WE"
                        title="SRI HARI K Testimonial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="small">
                      GUVI’s Full Stack Development course helped me switch careers into IT with confidence. 
                      Great mentors and placement support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 — Vinitha G (video) */}
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="card p-4 shadow-sm h-100 bg-white">
                    <h5 className="fw-bold">Vinitha G</h5>
                    <p className="text-muted mb-3">Node.js Developer</p>
                    <div className="ratio ratio-16x9 mb-3">
                      <iframe
                        src="https://www.youtube.com/embed/OL_Rjwe3_8w"
                        title="Vinitha Testimonial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="small">
                      GUVI’s MERN program with Tamil teaching helped me land a job as Node.js Developer. 
                      Mock interviews and projects boosted my confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 — Vignesh G (video) */}
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="card p-4 shadow-sm h-100 bg-white">
                    <h5 className="fw-bold">Vignesh G</h5>
                    <p className="text-muted mb-3">Junior Developer</p>
                    <div className="ratio ratio-16x9 mb-3">
                      <iframe
                        src="https://www.youtube.com/embed/kLGyvtYb0e8"
                        title="Vignesh G Testimonial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="small">
                      GUVI’s mentorship and training gave me the confidence to crack interviews and start my IT career.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-dark rounded-circle p-2"></span>
          </button>
        </div>

        {/* View All */}
        <div className="mt-4">
          <button className="btn btn-outline-success">View All</button>
        </div>
      </div>
    </section>
  );
}
