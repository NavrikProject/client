import React from "react";

import GoToTop from "../../GoToTop";
import { AboutSect, AboutSection, AboutWrapper } from "./AboutElements";

const About = () => {
  return (
    <AboutSect>
      <AboutSection>
        <AboutWrapper>
          <p>
            To keep pace with the fast moving IT trends, we believe that to
            deliver quality software training, it's important that the training
            is practical and current.
          </p>
          <p>
            As a Software development company, we want to provide students
            real-project experience and content from our everyday experience.
          </p>
        </AboutWrapper>
      </AboutSection>
      <GoToTop />
    </AboutSect>
  );
};

export default About;
