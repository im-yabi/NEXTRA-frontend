import React from "react";

export default function FreeResources() {
  return (
    <section
      className="py-5 text-center"
      style={{
        backgroundImage: "url('https://www.guvi.in/assets/B61DYQEk-Free-Resources.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "12px",
      }}
    >
      <div className="container py-4">
        <h3 className="fw-bold mb-3 text-dark">
          Find Our Perfect Free Resources to <br /> Enhance Your Skills Now!
        </h3>
        <button className="btn btn-success btn-lg shadow">
          Explore Now
        </button>
      </div>
    </section>
  );
}
