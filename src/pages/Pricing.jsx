import React from "react";

const plans = [
  { id: "p1", name: "Self-Paced", price: "₹9,999", features: ["Recorded lessons", "Community"] },
  { id: "p2", name: "Live Cohort", price: "₹25,000", features: ["Live classes", "Mentor support", "Projects"] }
];

export default function Pricing() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Pricing Plans</h2>
      <div className="row g-4">
        {plans.map(p => (
          <div className="col-md-6" key={p.id}>
            <div className="card h-100 p-3">
              <h5>{p.name}</h5>
              <h3 className="text-success">{p.price}</h3>
              <ul>
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button className="btn btn-success">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
