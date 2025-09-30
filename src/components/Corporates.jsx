import React from "react";

const corporates = [
  {
    icon: "📊",
    title: "Specialized Corporate Training",
  },
  {
    icon: "👥",
    title: "Streamlined Corporate Hiring",
  },
  {
    icon: "🌍",
    title: "Corporate Social Responsibility",
  },
  {
    icon: "📋",
    title: "HYRE Assessment",
  },
  {
    icon: "🎓",
    title: "End-to-End Campus Hiring",
  },
];

export default function Corporates() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h3 className="mb-3">NEXTRA for Corporates</h3>
        <p className="text-muted mb-5">
          Explore our customized corporate solutions for your company!
        </p>

        <div className="row justify-content-center g-4">
          {corporates.map((c, idx) => (
            <div className="col-md-2 col-6" key={idx}>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mb-2"
                  style={{ width: "50px", height: "50px", fontSize: "24px" }}
                >
                  {c.icon}
                </div>
                <p className="fw-semibold small">{c.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="btn btn-success">Learn More</button>
        </div>
      </div>
    </section>
  );
}
