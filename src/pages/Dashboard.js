import React, { Suspense } from "react";
import Dashboard1 from "../components/Dashboard/Dashboard";
//import Footer from "../components/User/Footer/Footer";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Dashboard = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <Dashboard1 />
        <Footer />
      </Suspense>
    </>
  );
};

export default Dashboard;
