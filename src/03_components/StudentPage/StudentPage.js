import React, { useState } from "react";
import { useSelector } from "react-redux";
import Copyright from "../Copyright/Copyright";
import StudentMenu from "../StudentMenu/StudentMenu";
import studentData from "./StudentMockData.json";
import "./StudentPage.css";

function StudentPage() {
  const displayState = useSelector((state) => state.display);
  const studentState = useSelector((state) => state.student);
  const [currentId, setcurrentId] = useState(0);
  const getMockData = studentData;

  const generateFakeUsers = displayState.map(({ studentName, id }) => {
    return {
      id: id,
      first_name: studentName,
      last_name: getMockData[id].last_name,
      age: getMockData[id].age,
      phone_number: getMockData[id].phone_number,
      email: getMockData[id].email,
      profile_avatar: getMockData[id].user_image,
    };
  });
  const [userData] = useState(generateFakeUsers);
  const firstNameById = userData[currentId].first_name;

  const getStudentData = studentState.filter((item) =>
    item.name.includes(firstNameById)
  );

  const diffAverage =
    getStudentData
      .map((obj) => obj.difficulty)
      .reduce((curr, acc) => curr + acc) / getStudentData.length;

  const rateAverage =
    getStudentData.map((obj) => obj.rating).reduce((curr, acc) => curr + acc) /
    getStudentData.length;

  const ExerciseOverview = getStudentData.map((obj) => {
    return (
      <tr>
        <th>{obj.exercise}</th>
        <td>{obj.difficulty}</td>
        <td>{obj.rating}</td>
      </tr>
    );
  });

  return (
    <div className="StudentPage__wrapper">
      <StudentMenu changeSelected={setcurrentId} activeBtn={currentId} />

      <div className="student__wrapper">
        <div className="student__container">
          <div className="student__profile">
            <img
              className="student__image"
              src={userData[currentId].profile_avatar}
              alt="userProfileImage"
            ></img>

            <h1 className="student__name">
              {userData[currentId].first_name} {userData[currentId].last_name}
            </h1>
          </div>

          <div className="student__about">
            <div className="student__about--info">
              <span>Phone</span>
              <span>Age</span>
              <span>Email</span>
              <span>Average difficulty</span>
              <span>Average Rating</span>
            </div>

            <div className="student__about--data">
              <span>{userData[currentId].phone_number}</span>
              <span>{userData[currentId].age}</span>
              <span>{userData[currentId].email}</span>
              <span>{diffAverage.toFixed(2)} / 5</span>
              <span>{rateAverage.toFixed(2)} / 5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="table__wrapper table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>{ExerciseOverview}</tbody>
        </table>
      </div>

      <Copyright />
    </div>
  );
}
export default StudentPage;
