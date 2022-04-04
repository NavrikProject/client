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
      <Suspense fallback={<div>Loading...</div>}>
        <CookieConsent />
      </Suspense>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/job-seeker"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <JobSeekerHomePage />
              </Suspense>
            }
          />
          <Route
            path="/recruiter"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RecruiterHomePage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            }
          />
          {/* current it is commented out <Route path="/trainee/cart" element={<Cart />} /> */}
          <Route
            path="/terms-conditions"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PrivacyPage />
              </Suspense>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ForgotPwdPage />
              </Suspense>
            }
          />
          <Route
            path="/trainer/your-courses/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <YourCoursePage />
              </Suspense>
            }
          />

          <Route
            exact
            path={`/user/activate/reset-password/:id`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ResetPwdPage />
              </Suspense>
            }
          />
          <Route
            exact
            path={`/user/activate/account/:id`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ActivateAccountPage />
              </Suspense>
            }
          />
          {/* all courses */}
          <Route
            path="/courses"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AllCoursesPage />
              </Suspense>
            }
          />
          {/* single course page */}
          <Route
            path="/courses/domain-skills/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SingleCoursePage />
              </Suspense>
            }
          />
          <Route
            path="/courses/it-skills/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SingleCoursePage />
              </Suspense>
            }
          />
          <Route
            path="/courses/software-development/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SingleCoursePage />
              </Suspense>
            }
          />
          {/* all trainers route*/}
          <Route
            path="/trainers"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AllTrainerPage />
              </Suspense>
            }
          />
          {/* sp single trainer page */}
          <Route
            path="/trainers/details/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SingleTrainerPage />
              </Suspense>
            }
          />
          {/* trainee home page after login */}
          {user?.type === "trainee" ? (
            <Route
              path="/trainee"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TraineeHomePage />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="/"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
          )}
          <Route
            path="/trainer/join-now"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <JoinNow />
              </Suspense>
            }
          />
          {user?.type === "trainee" ? (
            <Route
              path="/trainee/profile/update/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TraineeProfilePage />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Navigate to="/Not-found" />
                </Suspense>
              }
            />
          )}
          {user?.type === "trainer" ? (
            <Route
              path="/trainer/profile/update/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TrainerProfilePage />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Navigate to="/Not-found" />
                </Suspense>
              }
            />
          )}
          {/* trainer home page after login */}
          {user?.type === "trainer" ? (
            <Route
              path="/trainer"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TrainerHomePage />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="/"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
          )}
          {/* trainer home page after login */}
          {user?.type === "trainer" ? (
            <Route
              path="/trainer"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TrainerHomePage />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="/"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
          )}
          {/* job seeker home page after login */}
          {user?.type === "job-seeker" ? (
            <Route
              path="/job-seeker"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <JobSeekerHomePage />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="/"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
          )}
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          {/* Trainer section */}
          <Route
            path="/user/admin/dashboard/add-new-course"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AddNewCoursePage />
              </Suspense>
            }
          />
          {user?.role === 1 ? (
            <Route
              path="/user/admin/dashboard"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Navigate to="/login" />
                </Suspense>
              }
            />
          )}
          {/* recruiter home page */}
          {user?.type === "recruiter" ? (
            <Route
              path="/recruiter"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <RecruiterHomePage />
                </Suspense>
              }
            />
          ) : (
            <Route
              path="/"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
          )}
        </Routes>
      </Router>
      <ScrollButton />
    </>
  );
};

export default App;
