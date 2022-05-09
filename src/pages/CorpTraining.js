import React, { Suspense } from "react";
import LineWaveLoader from "../components/utils/LineWaveLoader";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";

const CorpAllCourses = React.lazy(() =>
  import("../components/User/Courses/CorpCourse/CorpAllCourses.js")
);
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));

const CorpTraining = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <CorpAllCourses />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default CorpTraining;
