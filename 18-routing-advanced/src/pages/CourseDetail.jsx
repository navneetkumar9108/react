import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  //   const { id } = useParams();
  const params = useParams();
  console.log(params);
  //   console.log(id);
  return (
    <div>
      <h1>Course Detail Page</h1>
      {/* <p>Course ID: {id}</p> */}
      <p>Course ID: {params.id}</p>
    </div>
  );
};

export default CourseDetail;
