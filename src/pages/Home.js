import React, { Suspense } from "react";
import LineWaveLoader from "../components/utils/LineWaveLoader";
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
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <HomeSection />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <Courses />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <Trainers />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <NewsLetter />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <Reviews />
      </Suspense>
      {/*  <OurClients /> */}
      <Suspense fallback={<LineWaveLoader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
