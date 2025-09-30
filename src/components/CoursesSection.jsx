import React, { useState } from "react";

const categories = [
  "Business & Management",
  "Data Science & AI",
  "Engineering & Design",
  "IT & Software, Network & Security",
  "Programming",
  "Creative and User Experience",
];

const courses = {
  "Business & Management": [
    {
      id: 1,
      title: "SAP S/4 HANA",
      img: "https://static.guvi.in/cdn-cgi/image/metadata=keep,width=750,height=385,f=auto,fit=cover/course-thumbnail/webps/saps4hana.webp",
      duration: "3 Hrs",
      language: "English",
    },
    {
      id: 2,
      title: "Email Etiquette",
      img: "https://static.guvi.in/cdn-cgi/image/metadata=keep,width=750,height=385,f=auto,fit=cover/course-thumbnail/webps/emailetiquette.webp",
      duration: "4 Hrs",
      language: "English",
    },
    {
      id: 3,
      title: "Resume Building",
      img: "https://static.guvi.in/cdn-cgi/image/metadata=keep,width=750,height=385,f=auto,fit=cover/course-thumbnail/webps/resumebuilding.webp",
      duration: "2 Hrs",
      language: "English",
    },
    {
      id: 4,
      title: "Confluence",
      img: "https://static.guvi.in/cdn-cgi/image/metadata=keep,width=750,height=385,f=auto,fit=cover/course-thumbnail/webps/confluenceenglish.webp",
      duration: "10 Hrs",
      language: "English",
    },
  ],
  // Add more categories here
};

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Business & Management");

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h3 className="text-center mb-3">
          Your Learning, Your Pace: Explore, Master, Succeed
        </h3>
        <p className="text-center text-muted mb-4">
          Choose from 1000+ exclusive courses with new courses being published
          every month.
        </p>

        {/* Category Tabs */}
        <div className="d-flex justify-content-center flex-wrap mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn me-2 mb-2 ${
                activeCategory === cat ? "btn-success" : "btn-outline-secondary"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="row g-4">
          {(courses[activeCategory] || []).map((course) => (
            <div className="col-md-3 col-6" key={course.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={course.img}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-danger mb-2">Paid</span>
                  <h6>{course.title}</h6>
                  <p className="small text-muted mb-1">
                    ⏱ {course.duration} &nbsp; 🌐 {course.language}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Courses Button */}
        <div className="text-center mt-4">
          <button className="btn btn-success btn-lg">Explore Courses</button>
        </div>
      </div>
    </section>
  );
}
