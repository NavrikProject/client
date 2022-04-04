import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Privacy from "../components/Generals/Privacy";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Privacy = React.lazy(() => import("../components/Generals/Privacy"));

const PrivacyPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <Privacy />
        <Footer />
      </Suspense>
    </>
  );
};

export default PrivacyPage;
