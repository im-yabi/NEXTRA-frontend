import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="card h-100">
      <img src={course.img || "https://via.placeholder.com/400x220"} className="card-img-top" alt={course.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.title}</h5>
        <p className="text-muted mb-2">{course.level} · {course.duration}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong className="text-success">{course.price}</strong>
          <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm">View</Link>
        </div>
      </div>
    </div>
  );
}
