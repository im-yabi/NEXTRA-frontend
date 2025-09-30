import React from "react";

export default function Stats() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h3 className="mb-5">We are proud of...</h3>
        
        {/* Top row - Numbers */}
        <div className="row g-4 mb-4">
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <h2 className="text-success">4147313</h2>
              <p className="mb-0">Learners</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <h2 className="text-success">194</h2>
              <p className="mb-0">Mentors</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <h2 className="text-success">52924952</h2>
              <p className="mb-0">Lines of Code Submission</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <h2 className="text-success">1673</h2>
              <p className="mb-0">Videos</p>
            </div>
          </div>
        </div>

        {/* Bottom row - Progress stats */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3 h-100 d-flex flex-column align-items-center">
              <div className="circular-progress text-success mb-2">
                <strong>72%</strong>
              </div>
              <p className="small mb-0">
                of Learners complete their courses within 3 months
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3 h-100 d-flex flex-column align-items-center">
              <div className="circular-progress text-success mb-2">
                <strong>78%</strong>
              </div>
              <p className="small mb-0">
                of Learners could recollect the concepts faster
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3 h-100 d-flex flex-column align-items-center">
              <div className="circular-progress text-success mb-2">
                <strong>84%</strong>
              </div>
              <p className="small mb-0">
                of Learners have better understanding over complex topics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
