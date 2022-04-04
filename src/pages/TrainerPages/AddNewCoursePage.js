import React, { Suspense } from "react";
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
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <AddNewCourse />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default AddNewCoursePage;
