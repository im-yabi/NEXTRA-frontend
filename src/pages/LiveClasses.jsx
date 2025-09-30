import React from "react";

const livePrograms = [
  {
    id: "lc1",
    title: "GEN AI Software Development Program (Certified by MongoDB, IITM Pravartak)",
    langs: "Tamil, English & Hindi",
    price: "₹45,000",
    img: "https://www.guvi.in/assets/Baq-GG32-data-science.webp",
  },
  {
    id: "lc2",
    title: "Artificial Intelligence & Machine Learning (Certified by Intel, IITM Pravartak)",
    langs: "Tamil, English & Hindi",
    price: "₹35,000",
    img: "https://www.guvi.in/assets/DtJkssym-intel-aiml.webp",
  },
  {
    id: "lc3",
    title: "UI/UX Design Course",
    langs: "Tamil, English, Hindi & Telugu",
    price: "₹40,000",
    img: "https://www.guvi.in/assets/DWtn8o20-sde.webp",
  },
  {
    id: "lc4",
    title: "Full Stack Development Course with AI Tools",
    langs: "Tamil, English, Hindi & Telugu",
    price: "₹45,000",
    img: "https://www.guvi.in/assets/ClcjHYEd-full-stack-development.webp",
  },
];


export default function LiveClasses() {
  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          <span className="text-danger">●</span> Live Classes + Placement Guidance
        </h2>
        <p className="text-muted">
          NEXTRA offers one of the industry’s leading project-based career programs
          that promises Placement Guidance on completing the program.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="row g-4">
        {livePrograms.map((program) => (
          <div className="col-md-3" key={program.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={program.img}
                className="card-img-top"
                alt={program.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{program.title}</h6>
                <p className="small text-muted">🌐 {program.langs}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button className="btn btn-outline-secondary btn-sm">Syllabus</button>
                  <button className="btn btn-success btn-sm">Know More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore All Programs */}
      <div className="text-center mt-5">
        <button className="btn btn-outline-success px-4">
          Explore All Programs
        </button>
      </div>
    </div>
  );
}
