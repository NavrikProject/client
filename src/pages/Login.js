import React, { Suspense } from "react";

//import LoginForm from "../components/Forms/LoginForm/LoginForm";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const LoginForm = React.lazy(() =>
  import("../components/Forms/LoginForm/LoginForm")
);
const Login = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <LoginForm />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Login;
