import React from "react";

const mentors = [
  { id: "m1", name: "Rahul Sharma", title: "Senior Fullstack", bio: "8+ years experience" },
  { id: "m2", name: "Priya R", title: "Data Scientist", bio: "Worked at top startups" }
];

export default function Instructors() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Instructors</h2>
      <div className="row g-4">
        {mentors.map(m => (
          <div className="col-md-6" key={m.id}>
            <div className="card p-3">
              <h5>{m.name}</h5>
              <p className="text-muted">{m.title}</p>
              <p>{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
