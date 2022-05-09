import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  SearchBoxContainer,
  SearchForm,
  SearchBoxInput,
  FaSearchIcon,
} from "./NavbarElements";
import logo from "../../../images/practi-logo.png";
import { useSelector } from "react-redux";
import Submenu from "./Submenu";

const Navbar = ({ toggleMenuItems }) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Nav>
      <LogoContainer>
        {user?.type ? (
          <Link
            style={{ textDecoration: "none", color: "#062C30" }}
            to={`/${user?.type}`}
          >
            <LogoImage src={logo} alt="brand " />
          </Link>
        ) : (
          <Link style={{ textDecoration: "none", color: "#062C30" }} to={`/`}>
            <LogoImage src={logo} alt="brand " />
          </Link>
        )}
      </LogoContainer>

      <MenuContainer>
        <MenuItem>
          {/* redirect to home page */}
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to={`/training-usp`}
            >
              Training USP
            </Link>
          </NavItem>
          <NavItem>
            <Submenu />
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to={`/about`}
            >
              About us
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to="/courses"
            >
              Courses
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to="/trainers"
            >
              Instructor
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to="/job-seeker"
            >
              Jobs
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to={`/recruiter`}
            >
              Recruiter
            </Link>
          </NavItem>
        </MenuItem>
      </MenuContainer>
      <SearchBoxContainer>
        <SearchForm>
          <SearchBoxInput placeholder="Search....."></SearchBoxInput>
          <FaSearchIcon />
        </SearchForm>
        {/* <Link
          style={{ textDecoration: "none", color: "#062C30" }}
          to={`/register`}
        >
          <SearchItemText>Register</SearchItemText>
        </Link> */}
      </SearchBoxContainer>
      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default Navbar;
