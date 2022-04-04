import React, { Suspense } from "react";
import LineWaveLoader from "../../components/utils/LineWaveLoader";
//import NavbarRes from "../../components/Navbar/UserNavbar/NavbarRes";
//import JoinNowForm from "../../components/Trainers/multiStepForm/JoinNowForm";
const NavbarRes = React.lazy(() =>
  import("../../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../../components/User/Footer/Footer"));
const JoinNowForm = React.lazy(() =>
  import("../../components/Trainers/multiStepForm/JoinNowForm")
);
const JoinNow = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <JoinNowForm />
        <Footer />
      </Suspense>
    </>
  );
};

export default JoinNow;
