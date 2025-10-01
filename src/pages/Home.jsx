import React from "react";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import LearnersJourney from "../components/LearnersJourney";
import Testimonials from "../components/Testimonials";
import Companies from "../components/Companies"; // ✅ FIXED (was wrong before)
import Stats from "../components/Stats";
import CoursesSection from "../components/CoursesSection";
import PracticePlatforms from "../components/PracticePlatforms";
import Corporates from "../components/Corporates";
import NativeLearning from "../components/NativeLearning";
import FreeResources from "../components/FreeResources";
import HeaderTop from "../components/HeaderTop";
 

const courses = [
  {
    id: "c1",
    title: "GEN AI Software Development + Full-Stack-Devlopment",
    level: "Beginner",
    duration: "3 Month",
    price: "₹45000",
    img: "https://www.guvi.in/assets/Baq-GG32-data-science.webp",
  },
  {
    id: "c2",
    title: "Data Analytics + AI",
    level: "Intermediate",
    duration: "2 MOnth",
    price: "₹35000",
    img: "https://www.guvi.in/assets/DtJkssym-intel-aiml.webp",
  },
  {
    id: "c3",
    title: "UI/UX Design Course + AI",
    level: "Beginner",
    duration: "3 Month",
    price: "₹40000",
    img: "https://www.guvi.in/assets/DWtn8o20-sde.webp",
  },
  {
    id: "c4",
    title: "Data Science + AI + Prompt Engineering",
    level: "Advanced",
    duration: "4 Month",
    price: "₹50000",
    img: "https://www.guvi.in/assets/ClcjHYEd-full-stack-development.webp",
  },
];

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <Hero />

      {/* Accreditations / Partnerships */}
     <section className="py-5 bg-light">
  <div className="container text-center">
    <h4 className="mb-4">Our Accreditations & Partnerships</h4>
    <div className="accreditations-marquee">
      <div className="accreditations-track">
        {[
          "https://www.guvi.in/assets/DVq3f3xP-autodesk.webp",
          "https://www.guvi.in/assets/BO405Vrs-iit-kanpur.webp",
          "https://www.guvi.in/assets/BIsdws_8-iit-ropar.webp",
          "https://www.guvi.in/assets/D1CT1oLd-iitm-pravartak.webp",
          "https://www.guvi.in/assets/FMwBCMe6-itt-gandhinagar.webp",
          "https://www.guvi.in/assets/BCPcGBgM-naan-mudhalvan.webp",
          "https://www.guvi.in/assets/BWlI1m4l-nasscom.webp",
          "https://www.guvi.in/assets/DAY9U0vx-skill-development.webp",
        ]
          .concat([
            // duplicate for smooth infinite scroll
            "https://www.guvi.in/assets/DVq3f3xP-autodesk.webp",
            "https://www.guvi.in/assets/BO405Vrs-iit-kanpur.webp",
            "https://www.guvi.in/assets/BIsdws_8-iit-ropar.webp",
            "https://www.guvi.in/assets/D1CT1oLd-iitm-pravartak.webp",
            "https://www.guvi.in/assets/FMwBCMe6-itt-gandhinagar.webp",
            "https://www.guvi.in/assets/BCPcGBgM-naan-mudhalvan.webp",
            "https://www.guvi.in/assets/BWlI1m4l-nasscom.webp",
            "https://www.guvi.in/assets/DAY9U0vx-skill-development.webp",
          ])
          .map((src, idx) => (
            <div className="accreditation-logo" key={idx}>
              <img src={src} alt={`Accreditation ${idx}`} />
            </div>
          ))}
      </div>
    </div>
  </div>
</section>


      {/* Live Classes */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">
            <span className="text-danger">●</span> Live Classes + Placement Guidance
          </h2>
          <div className="row g-4">
            {courses.map((c) => (
              <div className="col-md-3" key={c.id}>
                <CourseCard course={c} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-outline-success">Explore All Programs</button>
          </div>
        </div>
      </section>
       

      {/* Learners Journey */}
      <LearnersJourney />

      {/* Testimonials */}
      <Testimonials />

      {/* Companies */}
      <Companies />
      <Stats />
      <CoursesSection />
      <PracticePlatforms />
      <Corporates />
      <NativeLearning />
       <FreeResources />
     

      
    </div>
  );
}