import React from "react";

const practices = [
  { id: "pr1", title: "CodeKata", desc: "1500+ coding challenges to improve problem-solving.", btn: "Start Practicing" },
  { id: "pr2", title: "WebKata", desc: "Hands-on frontend practice with HTML, CSS & JS.", btn: "Explore" },
  { id: "pr3", title: "SQLKata", desc: "Practice SQL queries in a real database environment.", btn: "Try Now" },
  { id: "pr4", title: "Debugging", desc: "Improve debugging skills with real-world coding bugs.", btn: "Fix Bugs" },
  { id: "pr5", title: "IDE", desc: "Online coding playground to write and run code.", btn: "Launch IDE" },
  { id: "pr6", title: "HackerKid", desc: "Fun coding platform for kids with gamified lessons.", btn: "Play & Learn" },
];

export default function Practice() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Practice Platforms</h2>
        <p className="text-muted">Sharpen your skills with GUVI’s interactive coding platforms.</p>
      </div>

      <div className="row g-4">
        {practices.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card h-100 shadow-sm p-3 text-center">
              <h5>{p.title}</h5>
              <p className="text-muted">{p.desc}</p>
              <button className="btn btn-success btn-sm mt-auto">{p.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
