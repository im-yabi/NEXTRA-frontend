import React, { useState } from "react";

const platforms = {
  CodeKata: {
    img: "https://www.guvi.in/assets/Cvy-k-kD-codekata.webp",
    title: "CodeKata",
    desc: [
      "CodeKata is an interactive platform for programming practice.",
      "Offers 1500+ coding problems curated by top IT industry experts.",
      "Helps showcase your skills for job recruitment.",
      "Enhances your ability to crack coding interviews.",
    ],
    button: "Explore CodeKata",
  },
  WebKata: {
    img: "https://static.guvi.in/course-thumbnail/webkata.webp",
    title: "WebKata",
    desc: [
      "Hands-on web development challenges.",
      "Covers HTML, CSS, JavaScript and React.",
      "Perfect for building a strong frontend foundation.",
    ],
    button: "Explore WebKata",
  },
  SQLKata: {
    img: "https://static.guvi.in/course-thumbnail/sqlkata.webp",
    title: "SQLKata",
    desc: [
      "Interactive SQL practice problems.",
      "Covers SELECT, JOINs, Subqueries, and more.",
      "Boosts your database query-solving ability.",
    ],
    button: "Explore SQLKata",
  },
  Debugging: {
    img: "https://static.guvi.in/course-thumbnail/debugging.webp",
    title: "Debugging",
    desc: [
      "Fix broken code snippets across multiple languages.",
      "Enhances debugging and problem-solving skills.",
    ],
    button: "Explore Debugging",
  },
  IDE: {
    img: "https://static.guvi.in/course-thumbnail/ide.webp",
    title: "IDE",
    desc: [
      "Write and run your code instantly.",
      "Supports multiple programming languages.",
      "No installation needed — practice anywhere!",
    ],
    button: "Explore IDE",
  },
};

export default function PracticePlatforms() {
  const [active, setActive] = useState("CodeKata");

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h3 className="text-center mb-4">Learn. Practice. Earn. Have Fun!</h3>

        {/* Tabs */}
        <div className="d-flex justify-content-center flex-wrap mb-4">
          {Object.keys(platforms).map((p) => (
            <button
              key={p}
              className={`btn me-2 mb-2 ${
                active === p ? "btn-success" : "btn-outline-secondary"
              }`}
              onClick={() => setActive(p)}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center">
            <img
              src={platforms[active].img}
              alt={platforms[active].title}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="col-md-6">
            <h4>{platforms[active].title}</h4>
            <ul className="text-muted">
              {platforms[active].desc.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
            <button className="btn btn-success">
              {platforms[active].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
