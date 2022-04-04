import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Trainee from "../components/Trainee/Trainee";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Trainee = React.lazy(() => import("../components/Trainee/Trainee"));
const TraineeProfilePage = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <Trainee />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default TraineeProfilePage;
