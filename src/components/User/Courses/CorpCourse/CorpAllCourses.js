import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CorpCourseSection,
  CourseAddCart,
  CourseBody,
  CourseCardDiv,
  CourseImg,
  CourseImgBox,
  CoursePrice,
  CourseReviewsBox,
  CourseReviewsP,
  CourseSection,
  CourseSectionDiv,
  CourseTitleBox,
  CourseTitleH1,
  DurationBoxDiv,
  Titles,
  TitlesDesc,
  TrainerBox,
  TrainerDetails,
  TrainerImg,
  TrainerMore,
  TrainerTitleP,
} from "./CorpCourseElements";

const CorpAllCourses = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [noOfTrainees, setNoOfTrainees] = useState(10);
  const [corpCourses, setCorpCourses] = useState([]);
  useEffect(() => {
    const getAllCorpCourse = async () => {
      try {
        const response = await axios.get("/corporate/all-courses");
        if (!response.data) {
          return;
        }
        if (response.data) {
          setCorpCourses(response.data);
        }
      } catch (error) {
        return;
      }
    };
    getAllCorpCourse();
  }, []);
  return (
    <CourseSection>
      <CorpCourseSection>
        <CourseSectionDiv>
          {corpCourses?.map((course) => (
            <CourseCardDiv key={course.corp_course_id}>
              <CourseBody>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/courses/${course.course_category}/${course.course_id}`}
                >
                  <CourseImgBox>
                    <CourseImg
                      src={
                        course.course_image
                          ? course.corp_course_image
                          : "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      }
                      alt="course picture"
                    />
                  </CourseImgBox>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/courses/${course.course_category}/${course.course_id}`}
                >
                  <CourseTitleBox>
                    <CourseTitleH1>{course.corp_course_title}</CourseTitleH1>
                  </CourseTitleBox>
                </Link>
                <DurationBoxDiv>
                  <Titles>Duration:</Titles>
                  <TitlesDesc> {course.corp_course_duration} Months</TitlesDesc>
                </DurationBoxDiv>
                <DurationBoxDiv>
                  <Titles>Number of Trainees:</Titles>
                  <select onChange={(e) => setNoOfTrainees(e.target.value)}>
                    <option value="10">5-10</option>
                    <option value="20">10-20</option>
                    <option value="30">20-30</option>
                    <option value="40">30-40</option>
                    <option value="50">40-50</option>
                    <option value="60">50-60</option>
                  </select>
                </DurationBoxDiv>
                <CourseReviewsBox>
                  <CourseReviewsP>Enrolled : </CourseReviewsP>
                  <CoursePrice>
                    Price : ₹ {course.corp_course_price * noOfTrainees}
                  </CoursePrice>
                </CourseReviewsBox>
                {!user ? (
                  <CourseAddCart>
                    <Link
                      to={`/login`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Login Now
                    </Link>
                  </CourseAddCart>
                ) : (
                  <a
                    target={`_blank`}
                    style={{ textDecoration: "none", color: "black" }}
                    href={`${course.course_spayee_link}`}
                  >
                    <CourseAddCart>Register Now</CourseAddCart>
                  </a>
                )}
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/trainers/details/${course.course_trainer_profile_id}`}
                >
                  <TrainerBox>
                    <DurationBoxDiv>
                      <Titles> Experience in Teaching : </Titles>
                      <TitlesDesc>
                        {course.corp_course_trainer_exp} Year's
                      </TitlesDesc>
                    </DurationBoxDiv>
                  </TrainerBox>

                  <TrainerBox>
                    <TrainerDetails>
                      <TrainerImg src={course.corp_course_trainer_image} />
                      <TrainerTitleP>
                        {course.corp_course_trainer_name}
                      </TrainerTitleP>
                    </TrainerDetails>
                    <TrainerMore>Know More</TrainerMore>
                  </TrainerBox>
                </Link>
              </CourseBody>
            </CourseCardDiv>
          ))}

          {/* <CourseSectionDiv>
        <CourseCardDiv>
          <CourseNotFoundHeading>
            No courses found this name, Please Try again with a different name
          </CourseNotFoundHeading>
        </CourseCardDiv>
      </CourseSectionDiv> */}
        </CourseSectionDiv>
      </CorpCourseSection>
    </CourseSection>
  );
};

export default CorpAllCourses;
