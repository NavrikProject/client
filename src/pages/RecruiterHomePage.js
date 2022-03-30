import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import RecruiterHome from "../components/Recruiter/RecruiterHome";
const RecruiterHomePage = () => {
  return (
    <>
      <NavbarRes />
      <RecruiterHome />
      <Footer />
    </>
  );
};

export default RecruiterHomePage;
