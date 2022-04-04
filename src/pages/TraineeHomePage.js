import React, { Suspense } from "react";
//import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Courses from "../components/User/Courses/Courses";
//import Footer from "../components/User/Footer/Footer";
//import AboutUs from "../components/User/About/About";
import LineWaveLoader from "../components/utils/LineWaveLoader";

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
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <SingleProfile />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <Courses />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<LineWaveLoader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default TraineeHomePage;
