import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Trainer from "../components/Trainers/Trainers";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Trainer = React.lazy(() => import("../components/Trainers/Trainers"));
const Trainers = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <Trainer />
        <Footer />
      </Suspense>
    </>
  );
};

export default Trainers;
