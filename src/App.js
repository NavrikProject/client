import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollButton from "./components/ScrollToTop";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LineWaveLoader from "./components/utils/LineWaveLoader";
//import Home from "./pages/Home";
//import SingleCoursePage from "./pages/SingleCoursePage.js";
//import SingleTrainerPage from "./pages/SingleTrainerPage.js";
//import AllCoursesPage from "./pages/AllCoursesPage.js";
//import Register from "./pages/Register.js";
//import Login from "./pages/Login.js";
//import TraineeProfilePage from "./pages/TraineeProfilePage.js";
//import TrainerProfilePage from "./pages/TrainerPages/TrainerProfilePage.js";
//import AboutUs from "./pages/AboutUs.js";
//import Profile from "./pages/Profile.js";
//import TraineeHomePage from "./pages/TraineeHomePage.js";
//import TrainerHomePage from "./pages/TrainerHomePage.js";
//import AddNewCoursePage from "./pages/TrainerPages/AddNewCoursePage.js";
//import JobSeekerHomePage from "./pages/JobSeekerHomePage.js";
//import NotFound from "./pages/Not-found.js";
//import JoinNow from "./pages/TrainerPages/JoinNow.js";
//import AllTrainerPage from "./pages/AllTrainersPage";
//import Dashboard from "./pages/Dashboard";
//import RecruiterHomePage from "./pages/RecruiterHomePage";
//import Terms from "./pages/T&C";
//import PrivacyPage from "./pages/PrivacyPage";
//import ForgotPwdPage from "./pages/ForgotPwdPage";
//import ResetPwdPage from "./pages/ResetPwdPage";
//import YourCoursePage from "./pages/TrainerPages/YourCoursePage";
//import ActivateAccountPage from "./pages/ActivateAccountPage";
//import CookieConsent, { Cookies } from "react-cookie-consent";
//import CookieConsent from "./components/utils/CookieConsent";
const CookieConsent = React.lazy(() =>
  import("./components/utils/CookieConsent")
);
const Home = React.lazy(() => import("./pages/Home"));
const SingleCoursePage = React.lazy(() =>
  import("./pages/SingleCoursePage.js")
);
const SingleTrainerPage = React.lazy(() =>
  import("./pages/SingleTrainerPage.js")
);
const AllCoursesPage = React.lazy(() => import("./pages/AllCoursesPage.js"));
const Register = React.lazy(() => import("./pages/Register.js"));
const Login = React.lazy(() => import("./pages/Login.js"));
const TraineeProfilePage = React.lazy(() =>
  import("./pages/TraineeProfilePage.js")
);
const TrainerProfilePage = React.lazy(() =>
  import("./pages/TrainerPages/TrainerProfilePage.js")
);
const AboutUs = React.lazy(() => import("./pages/AboutUs.js"));
const Profile = React.lazy(() => import("./pages/Profile.js"));
const TraineeHomePage = React.lazy(() => import("./pages/TraineeHomePage.js"));
const TrainerHomePage = React.lazy(() => import("./pages/TrainerHomePage.js"));
const AddNewCoursePage = React.lazy(() =>
  import("./pages/TrainerPages/AddNewCoursePage.js")
);
const JobSeekerHomePage = React.lazy(() =>
  import("./pages/JobSeekerHomePage.js")
);
const NotFound = React.lazy(() => import("./pages/Not-found.js"));
const JoinNow = React.lazy(() => import("./pages/TrainerPages/JoinNow.js"));
const AllTrainerPage = React.lazy(() => import("./pages/AllTrainersPage"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const RecruiterHomePage = React.lazy(() => import("./pages/RecruiterHomePage"));
const Terms = React.lazy(() => import("./pages/T&C"));
const PrivacyPage = React.lazy(() => import("./pages/PrivacyPage"));
const ForgotPwdPage = React.lazy(() => import("./pages/ForgotPwdPage"));
const ResetPwdPage = React.lazy(() => import("./pages/ResetPwdPage"));
const YourCoursePage = React.lazy(() =>
  import("./pages/TrainerPages/YourCoursePage")
);
const ActivateAccountPage = React.lazy(() =>
  import("./pages/ActivateAccountPage")
);
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<LineWaveLoader />}>
        <CookieConsent />
      </Suspense>
      <Router basename="/">
        <Suspense fallback={<LineWaveLoader />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/job-seeker" element={<JobSeekerHomePage />} />
            <Route path="/recruiter" element={<RecruiterHomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* current it is commented out <Route path="/trainee/cart" element={<Cart />} /> */}
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/forgot-password" element={<ForgotPwdPage />} />
            <Route
              path="/trainer/your-courses/:id"
              element={<YourCoursePage />}
            />

            <Route
              exact
              path={`/user/activate/reset-password/:id`}
              element={<ResetPwdPage />}
            />
            <Route
              exact
              path={`/user/activate/account/:id`}
              element={<ActivateAccountPage />}
            />
            {/* all courses */}
            <Route path="/courses" element={<AllCoursesPage />} />
            {/* single course page */}
            <Route
              path="/courses/domain-skills/:id"
              element={<SingleCoursePage />}
            />
            <Route
              path="/courses/it-skills/:id"
              element={<SingleCoursePage />}
            />
            <Route
              path="/courses/software-development/:id"
              element={<SingleCoursePage />}
            />
            {/* all trainers route*/}
            <Route path="/trainers" element={<AllTrainerPage />} />
            {/* sp single trainer page */}
            <Route
              path="/trainers/details/:id"
              element={<SingleTrainerPage />}
            />
            {/* trainee home page after login */}
            {user?.type === "trainee" ? (
              <Route path="/trainee" exact element={<TraineeHomePage />} />
            ) : (
              <Route path="/" exact element={<Home />} />
            )}
            <Route path="/trainer/join-now" element={<JoinNow />} />
            {user?.type === "trainee" ? (
              <Route
                path="/trainee/profile/update/:id"
                element={<TraineeProfilePage />}
              />
            ) : (
              <Route path="*" element={<Navigate to="/Not-found" />} />
            )}
            {user?.type === "trainer" ? (
              <Route
                path="/trainer/profile/update/:id"
                element={<TrainerProfilePage />}
              />
            ) : (
              <Route path="*" element={<Navigate to="/Not-found" />} />
            )}
            {/* trainer home page after login */}
            {user?.type === "trainer" ? (
              <Route path="/trainer" exact element={<TrainerHomePage />} />
            ) : (
              <Route path="/" exact element={<Home />} />
            )}
            {/* trainer home page after login */}
            {user?.type === "trainer" ? (
              <Route path="/trainer" exact element={<TrainerHomePage />} />
            ) : (
              <Route path="/" exact element={<Home />} />
            )}
            {/* job seeker home page after login */}
            {user?.type === "job-seeker" ? (
              <Route path="/job-seeker" exact element={<JobSeekerHomePage />} />
            ) : (
              <Route path="/" exact element={<Home />} />
            )}
            <Route path="*" element={<Home />} />
            {/* Trainer section */}
            <Route
              path="/user/admin/dashboard/add-new-course"
              element={<AddNewCoursePage />}
            />
            {user?.role === 1 ? (
              <Route path="/user/admin/dashboard" element={<Dashboard />} />
            ) : (
              <Route path="/login" element={<Navigate to="/login" />} />
            )}
            {/* recruiter home page */}
            {user?.type === "recruiter" ? (
              <Route path="/recruiter" exact element={<RecruiterHomePage />} />
            ) : (
              <Route path="/" exact element={<Home />} />
            )}
          </Routes>
        </Suspense>
      </Router>
      <ScrollButton />
    </>
  );
};

export default App;
