import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Register = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        Trainer profile page
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Register;
