import React, { Suspense } from "react";
//import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Courses from "../components/User/Courses/Courses";
//import Footer from "../components/User/Footer/Footer";
//import AboutUs from "../components/User/About/About";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const SingleProfile = React.lazy(() =>
  import("../components/Forms/ProfileForm/SingleProfile")
);
const Courses = React.lazy(() => import("../components/User/Courses/Courses"));
const AboutUs = React.lazy(() => import("../components/User/About/About"));

const TraineeHomePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SingleProfile />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Courses />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default TraineeHomePage;
