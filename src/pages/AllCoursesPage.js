import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import AllCourse from "../components/User/Courses/AllCourses/AllCourses";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const AllCourse = React.lazy(() =>
  import("../components/User/Courses/AllCourses/AllCourses")
);

const AllCourses = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <AllCourse />
        <Footer />
      </Suspense>
    </>
  );
};

export default AllCourses;
