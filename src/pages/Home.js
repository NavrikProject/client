import React, { Suspense } from "react";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import HomeSection from "../components/User/Home/HomeSection";
//import About from "../components/User/About/About";
//import Courses from "../components/User/Courses/Courses";
//import Trainers from "../components/Trainers/Trainers";
//import Reviews from "../components/User/Reviews/Reviews";
//import NewsLetter from "../components/User/NewsLetter/NewsLetter";
// import OurClients from "../components/User/OurClients/OurClients";
//import Footer from "../components/User/Footer/Footer";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const HomeSection = React.lazy(() =>
  import("../components/User/Home/HomeSection")
);
const About = React.lazy(() => import("../components/User/About/About"));
const Courses = React.lazy(() => import("../components/User/Courses/Courses"));
const Trainers = React.lazy(() => import("../components/Trainers/Trainers"));
const Reviews = React.lazy(() => import("../components/User/Reviews/Reviews"));
const NewsLetter = React.lazy(() =>
  import("../components/User/NewsLetter/NewsLetter")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Courses />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Trainers />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsLetter />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews />
      </Suspense>
      {/*  <OurClients /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
