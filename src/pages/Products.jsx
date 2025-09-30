import React from "react";

const products = [
  { id: "p1", title: "CodeKata", desc: "1500+ coding problems to sharpen skills.", btn: "Explore" },
  { id: "p2", title: "WebKata", desc: "Frontend practice platform.", btn: "Explore" },
  { id: "p3", title: "SQLKata", desc: "Hands-on SQL query practice.", btn: "Explore" },
  { id: "p4", title: "IDE", desc: "Online coding environment.", btn: "Launch" },
  { id: "p5", title: "HackerKid", desc: "Coding for kids, gamified learning.", btn: "Try Now" },
];

export default function Products() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Products</h2>
        <p className="text-muted">
          Learn, practice, and upskill with interactive GUVI platforms.
        </p>
      </div>

      <div className="row g-4">
        {products.map((prod) => (
          <div className="col-md-4" key={prod.id}>
            <div className="card h-100 shadow-sm p-3 text-center">
              <h5>{prod.title}</h5>
              <p className="text-muted">{prod.desc}</p>
              <button className="btn btn-success btn-sm mt-auto">{prod.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
