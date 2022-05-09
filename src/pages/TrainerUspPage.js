import React, { Suspense } from "react";
import LineWaveLoader from "../components/utils/LineWaveLoader";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";

const TrainerUsp = React.lazy(() =>
  import("../components/User/Usp/TrainerUsp.js")
);
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));

const TrainerUspPage = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <TrainerUsp />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default TrainerUspPage;
