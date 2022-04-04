import React, { Suspense } from "react";
//import ResetPassword from "../components/Forms/PasswordForm/ResetPassword";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const ResetPassword = React.lazy(() =>
  import("../components/Forms/PasswordForm/ResetPassword")
);
const ResetPwdPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <ResetPassword />
        <Footer />
      </Suspense>
    </>
  );
};

export default ResetPwdPage;
