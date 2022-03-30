import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleCourseHeader from "./SingleCourseSections/SingleCourseHeader";
import axios from "axios";
import GoToTop from "../../../../GoToTop";
const SingleCourse = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  const [oneCourse, setOneCourse] = useState({});
  useEffect(() => {
    try {
      const getOneCourse = async () => {
        const result = await axios.get(
          `https://navriktrainingserverside.azurewebsites.net/api/courses/full-course/${path}`
        );
        setOneCourse(result);
      };
      getOneCourse();
    } catch (error) {
      return;
    }
  }, [path]);
  return (
    <>
      <SingleCourseHeader data={oneCourse} />
      {/* <CourseContent />
      <CourseTrainerSingle /> */}
      <GoToTop />
    </>
  );
};

export default SingleCourse;
