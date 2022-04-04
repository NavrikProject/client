import React, { Suspense } from "react";
//import Footer from "../components/User/Footer/Footer";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const SingleProfile = React.lazy(() =>
  import("../components/Forms/ProfileForm/SingleProfile")
);

const Profile = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <SingleProfile />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Profile;
