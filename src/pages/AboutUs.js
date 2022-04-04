import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";

const About = React.lazy(() => import("../components/User/About/About"));
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));

const AboutUs = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <About />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default AboutUs;
