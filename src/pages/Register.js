import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const RegisterForm = React.lazy(() =>
  import("../components/Forms/RegisterForm/RegisterForm")
);
const Register = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <RegisterForm />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Register;
