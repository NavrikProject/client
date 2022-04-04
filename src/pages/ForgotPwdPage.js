import React, { Suspense } from "react";
//import ForgotPassword from "../components/Forms/PasswordForm/ForgotPassword";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";

const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const ForgotPassword = React.lazy(() =>
  import("../components/Forms/PasswordForm/ForgotPassword")
);
const ForgotPwdPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <ForgotPassword />
        <Footer />
      </Suspense>
    </>
  );
};

export default ForgotPwdPage;
