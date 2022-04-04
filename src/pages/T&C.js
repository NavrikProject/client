import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Terms from "../components/Generals/Terms";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Terms = React.lazy(() => import("../components/Generals/Terms"));

const TermsCondition = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <Terms />
        <Footer />
      </Suspense>
    </>
  );
};

export default TermsCondition;
