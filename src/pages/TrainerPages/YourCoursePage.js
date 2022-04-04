import React, { Suspense } from "react";
import LineWaveLoader from "../../components/utils/LineWaveLoader";
//import Footer from "../../components/User/Footer/Footer";
//import NavbarRes from "../../components/Navbar/UserNavbar/NavbarRes";
//import TrainerCourses from "../../components/Trainers/TrainerCourse/TrainerCourse";
const NavbarRes = React.lazy(() =>
  import("../../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../../components/User/Footer/Footer"));
const TrainerCourses = React.lazy(() =>
  import("../../components/Trainers/TrainerCourse/TrainerCourse")
);
const YourCoursePage = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <TrainerCourses />
        <Footer />
      </Suspense>
    </>
  );
};

export default YourCoursePage;
