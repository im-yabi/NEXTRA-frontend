import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  { id: "c1", title: "Full-Stack Web Development", level: "Beginner", duration: "12 weeks", price: "₹45,000", tags: ["React", "Node.js"] },
  { id: "c2", title: "Data Science", level: "Intermediate", duration: "10 weeks", price: "₹45,000", tags: ["Python", "Pandas"] },
  { id: "c3", title: "Data Analyst", level: "Advanced", duration: "8 weeks", price: "₹35,000", tags: ["ML", "Scikit-learn"] },
];

export default function Courses() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold mb-6">All Courses</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  );
}
