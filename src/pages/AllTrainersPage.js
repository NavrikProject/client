import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import AllTrainers from "../components/Trainers/AllTrainers";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));

const AllTrainers = React.lazy(() =>
  import("../components/Trainers/AllTrainers")
);

const AllTrainerPage = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <AllTrainers />
        <Footer />
      </Suspense>
    </>
  );
};

export default AllTrainerPage;
