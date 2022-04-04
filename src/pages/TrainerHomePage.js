import React, { Suspense } from "react";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Footer from "../components/User/Footer/Footer";
//import About from "../components/User/About/About";
//import TrainerHome from "../components/Trainers/TrainerHome";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const TrainerHome = React.lazy(() =>
  import("../components/Trainers/TrainerHome")
);
const About = React.lazy(() => import("../components/User/About/About"));
const TrainerHomePage = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <TrainerHome />
        <About />
        <Footer />
      </Suspense>
    </>
  );
};

export default TrainerHomePage;
