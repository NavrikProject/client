import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import AllCourse from "../components/User/Courses/AllCourses/AllCourses";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import LineWaveLoader from "../components/utils/LineWaveLoader";

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
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <AllCourse />
        <Footer />
      </Suspense>
    </>
  );
};

export default AllCourses;
