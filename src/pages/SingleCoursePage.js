import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import SingleCourse from "../components/User/Courses/CourseCard/SingleCourse/SingleCourse";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const SingleCourse = React.lazy(() =>
  import("../components/User/Courses/CourseCard/SingleCourse/SingleCourse")
);

const SingleCoursePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <SingleCourse />
        <Footer />
      </Suspense>
    </>
  );
};

export default SingleCoursePage;
