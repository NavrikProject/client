import React, { Suspense } from "react";
import LineWaveLoader from "../../components/utils/LineWaveLoader";
//import Footer from "../../components/User/Footer/Footer";
//import NavbarRes from "../../components/Navbar/UserNavbar/NavbarRes";
//import AddNewCourse from "../../components/Trainers/TrainerProfileForm/AddNewCourse";

const NavbarRes = React.lazy(() =>
  import("../../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../../components/User/Footer/Footer"));
const AddNewCourse = React.lazy(() =>
  import("../../components/Trainers/TrainerProfileForm/AddNewCourse")
);

const AddNewCoursePage = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <AddNewCourse />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default AddNewCoursePage;
