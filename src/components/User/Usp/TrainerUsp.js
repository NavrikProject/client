import React from "react";
import GoToTop from "../../GoToTop";
import {
  UspDesc,
  UspDiv,
  UspDivImg,
  UspH3,
  UspList,
  UspOl,
  UspSect,
  UspSection,
  UspTitle,
  UspWrapper,
} from "./TrainerUspElements";

const Usp = () => {
  return (
    <UspSect>
      <UspSection>
        <UspWrapper>
          <UspDiv>
            <div>
              <UspDesc>
                Our belief is simple - to be the best developer in a software
                are you need practical training from real software developers.
              </UspDesc>
              <br />
              <UspDesc>
                Hence, we started our IT company Navrik Software solutions
                first. At Navrik Software solutions we deliver projects.
              </UspDesc>
              <br />
              <UspDesc>
                We ensure our trainees get practical hand-on software training
                from developers and industry experts who live and breath that
                skill.
              </UspDesc>
            </div>
            <div>
              <UspDivImg
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </UspDiv>
          <UspTitle>The three pillars of our training are :-</UspTitle>
          <UspH3>Practical</UspH3> <UspH3>Simple</UspH3>
          <UspH3>Mentoring</UspH3>
        </UspWrapper>
      </UspSection>
      <GoToTop />
    </UspSect>
  );
};

export default Usp;
