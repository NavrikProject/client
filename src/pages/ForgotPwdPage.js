import React, { Suspense } from "react";
//import ForgotPassword from "../components/Forms/PasswordForm/ForgotPassword";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import LineWaveLoader from "../components/utils/LineWaveLoader";

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
      <Suspense fallback={<LineWaveLoader />}>
        <NavbarRes />
        <ForgotPassword />
        <Footer />
      </Suspense>
    </>
  );
};

export default ForgotPwdPage;
