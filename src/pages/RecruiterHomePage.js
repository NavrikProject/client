import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import RecruiterHome from "../components/Recruiter/RecruiterHome";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const RecruiterHome = React.lazy(() =>
  import("../components/Recruiter/RecruiterHome")
);
const RecruiterHomePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <RecruiterHome />
        <Footer />
      </Suspense>
    </>
  );
};

export default RecruiterHomePage;
