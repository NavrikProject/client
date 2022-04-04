import React, { Suspense } from "react";
import LineWaveLoader from "../../components/utils/LineWaveLoader";
const NavbarRes = React.lazy(() =>
  import("../../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../../components/User/Footer/Footer"));
//import TrainerProfileForm from "../../components/Trainers/TrainerProfileForm/TrainerProfileForm.js";
const TrainerProfileForm = React.lazy(() =>
  import("../../components/Trainers/TrainerProfileForm/TrainerProfileForm")
);
const TrainerProfileForms = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <TrainerProfileForm />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default TrainerProfileForms;
