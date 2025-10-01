import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Instructors from "./pages/Instructors";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import LiveClasses from "./pages/LiveClasses";
import Resources from "./pages/Resources";
import Products from "./pages/Products";
import Practice from "./pages/Practice";

// (Optional) Add Practice.jsx later

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/products" element={<Products />} />
          {/* Practice route can be added later */}
          <Route path="/practice" element={<Practice />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}