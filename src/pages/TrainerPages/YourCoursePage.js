import React, { Suspense } from "react";
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
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <TrainerCourses />
        <Footer />
      </Suspense>
    </>
  );
};

export default YourCoursePage;
