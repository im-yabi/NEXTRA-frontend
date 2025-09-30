import React from "react";

export default function HeaderTop() {
  return (
    <div className="bg-primary text-white py-2 px-3 d-flex justify-content-between align-items-center">
      <span className="small">
        Secure your future with Intel AIML — Master GenAI, Agentic AI, Deep Learning, LLM & MLOps.
      </span>
      <a href="#apply" className="btn btn-success btn-sm fw-bold">
        Apply Now
      </a>
    </div>
  );
}
