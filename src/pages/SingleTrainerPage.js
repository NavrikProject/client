import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import SingleTrainer from "../components/Trainers/TrainerCard/SingleTrainer/SingleTrainer";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const SingleTrainer = React.lazy(() =>
  import("../components/Trainers/TrainerCard/SingleTrainer/SingleTrainer")
);
const SingleTrainerPage = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <SingleTrainer />
        <Footer />
      </Suspense>
    </>
  );
};

export default SingleTrainerPage;
