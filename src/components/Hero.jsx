import React from "react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"  // this will NOT work in JSX
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.guvi.in/cdn-cgi/image/metadata=keep,width=1920,height=427,f=auto,fit=cover/banner/bnr_339b0b1e61c1a1d90b2ec0180e570b01926693d9_desktop_1758625749.webp"
              className="d-block w-100"
              alt="Banner 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.guvi.in/cdn-cgi/image/metadata=keep,width=1920,height=427,f=auto,fit=cover/banner/bnr_05960cf3cb45df82f35f78d42cbeabf090180bf1_desktop_1758625782.webp"
              className="d-block w-100"
              alt="Banner 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.guvi.in/cdn-cgi/image/metadata=keep,width=1920,height=427,f=auto,fit=cover/banner/bnr_a6bb9ba138b011370a64ae416040f16d4ea8b37e_desktop_1756921761.webp"
              className="d-block w-100"
              alt="Banner 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.guvi.in/cdn-cgi/image/metadata=keep,width=1920,height=427,f=auto,fit=cover/banner/bnr_05960cf3cb45df82f35f78d42cbeabf090180bf1_desktop_1758625782.webp"
              className="d-block w-100"
              alt="Banner 4"
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3"></button>
        </div>
      </div>
    </section>
  );
}
