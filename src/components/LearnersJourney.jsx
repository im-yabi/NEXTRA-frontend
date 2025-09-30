import React from "react";

const learners = [
  {
    id: 1,
    name: "Padmini Kadhirvel",
    img: "https://www.guvi.in/assets/wJeRHz4L-learner-1.webp",
    companyLogo: "https://www.guvi.in/assets/ItPNK4qq-tacho-mind.webp",
    before: "Online Support Associate",
    after: "Automation Testing Engineer",
  },
  {
    id: 2,
    name: "B Swathy",
    img: "https://www.guvi.in/assets/DfBgHrU6-learner-2.webp",
    companyLogo: "https://www.guvi.in/assets/DXzyHALb-smart-health.webp",
    before: "Associate",
    after: "UI/UX Designer",
  },
  {
    id: 3,
    name: "Vignesh G",
    img: "https://www.guvi.in/assets/aWQNIgNg-learner-3.webp",
    companyLogo: "https://www.guvi.in/assets/Df8DSthx-agnikul.webp",
    before: "Fresher, MSc (Arts & Science)",
    after: "Junior Developer",
  },
  {
    id: 4,
    name: "Ramapriya Prasathe",
    img: "https://www.guvi.in/assets/Db9Nr-9J-learner-4.webp",
    companyLogo: "https://www.guvi.in/assets/BcO-9oxb-remitbee.webp",
    before: "9 years gap after graduation",
    after: "Automation Testing Engineer",
  },
];

export default function LearnersJourney() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h3 className="mb-5">Journey Of Our Learners</h3>
        <div className="row g-4">
          {learners.map((l) => (
            <div className="col-md-3 col-12" key={l.id}>
              <div className="card border-0 shadow-sm p-3 h-100">
                {/* Profile */}
                <img
                  src={l.img}
                  alt={l.name}
                  className="rounded-circle mx-auto"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="mt-3">{l.name}</h5>
                {l.companyLogo && (
                  <img
                    src={l.companyLogo}
                    alt="Company"
                    style={{ height: "30px", marginBottom: "10px" }}
                  />
                )}

                {/* Timeline */}
                <div className="mt-3 text-start small">
                  {/* Before GUVI */}
                  <div className="d-flex align-items-center mb-2">
                    <span
                      className="me-2"
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "2px solid #999",
                        display: "inline-block",
                      }}
                    ></span>
                    <span>{l.before}</span>
                  </div>

                  {/* After GUVI */}
                  <div className="d-flex align-items-center mb-2 text-success">
                    <span
                      className="me-2"
                      style={{
                        fontSize: "18px",
                        lineHeight: "1",
                      }}
                    >
                      ↓
                    </span>
                    <span>After NEXTRA</span>
                  </div>

                  {/* Current role */}
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#28a745",
                        display: "inline-block",
                      }}
                    ></span>
                    <span className="fw-bold text-success">{l.after}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots (static for now) */}
        <div className="mt-4">
          <button className="btn btn-outline-secondary btn-sm me-2">◀</button>
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className={`mx-1 ${
                i === 2 ? "bg-success" : "bg-light"
              } rounded-circle`}
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                border: "1px solid #28a745",
              }}
            ></span>
          ))}
          <button className="btn btn-outline-secondary btn-sm ms-2">▶</button>
        </div>
      </div>
    </section>
  );
}
