import React from "react";
import { useParams } from "react-router-dom";

const courseList = [
  { id: "c1", title: "Full-Stack Web Development", level: "Beginner", duration: "12 weeks", price: "₹25,000", syllabus: ["HTML/CSS", "JS", "React", "Node"] },
  { id: "c2", title: "Data Science with Python", level: "Intermediate", duration: "10 weeks", price: "₹30,000", syllabus: ["Python", "Pandas", "ML"] }
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseList.find(c => c.id === id);

  if (!course) return <div className="container py-5">Course not found.</div>;

  return (
    <div className="container py-5">
      <h2>{course.title}</h2>
      <p className="text-muted">{course.duration} · {course.level}</p>
      <p className="fw-bold text-success">{course.price}</p>

      <h5 className="mt-4">Syllabus (sample)</h5>
      <ul>
        {course.syllabus.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <button className="btn btn-success mt-3">Enroll Now</button>
    </div>
  );
}
