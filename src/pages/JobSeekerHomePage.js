import React, { Suspense } from "react";
//import JobHomePage from "../components/JobSeeker/JobHomePage";
//import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
//import Footer from "../components/User/Footer/Footer";
const NavbarRes = React.lazy(() =>
  import("../components/Navbar/UserNavbar/NavbarRes")
);
const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const JobHomePage = React.lazy(() =>
  import("../components/JobSeeker/JobHomePage")
);
const JobSeekerHomePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarRes />
        <JobHomePage />
        <Footer />
      </Suspense>
    </>
  );
};

export default JobSeekerHomePage;
