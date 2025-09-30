import React from "react";

const resources = [
  { id: "r1", title: "Success Stories", desc: "Real stories from learners who transformed their careers." },
  { id: "r2", title: "Learn Hub", desc: "Browse blogs, tutorials, and free resources." },
  { id: "r3", title: "Free Resources", desc: "Guides, ebooks, and materials for upskilling." },
  { id: "r4", title: "Web Stories", desc: "Quick learning in short story format." },
  { id: "r5", title: "Rewards", desc: "Earn points and unlock benefits while learning." },
  { id: "r6", title: "Refer a Friend", desc: "Invite friends & earn rewards." },
];

export default function Resources() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Resources</h2>
        <p className="text-muted">Explore tools, stories, and free materials to boost your learning.</p>
      </div>

      <div className="row g-4">
        {resources.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card h-100 shadow-sm p-3">
              <h5>{item.title}</h5>
              <p className="text-muted">{item.desc}</p>
              <button className="btn btn-outline-success btn-sm mt-auto">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
