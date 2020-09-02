import React, { useState, useEffect } from "react";
import StudentList from "../components/studentList";
import StudentEditor from "../components/studentEditor";
import StudentService from "../services/StudentService";

export default function StudentManagement(props) {
  var [students, setStudents] = useState([]);
  var [selectedRow, setSelectedRow] = useState();

  useEffect(() => {
    getAllData();
  }, []);

  function onRowSelect(param) {
    setSelectedRow(
      param ? param : { Id: null, Name: "", Age: "", CompanyName: "" }
    );
  }

  function onDelete(param) {
    setStudents(students.filter((x) => x.Id !== selectedRow.Id));
    if (!param.Id) {
      setSelectedRow(null);
    } else {
      StudentService.deleteStudent(selectedRow.Id).then(getAllData);
    }
  }

  function onCancel() {
    setSelectedRow(null);
  }

  function onUpdate(param) {
    if (param.Id) {
      StudentService.updateStudent(param, param.Id).then(getAllData);
    } else {
      StudentService.createStudent(param).then(getAllData);
    }
  }

  function getAllData() {
    StudentService.getEmployees().then((res) => {
      setStudents(res.data);
      setSelectedRow(null);
    });
  }

  return (
    <React.Fragment>
      {students.length > 0 ? (
        <StudentList data={students} onRowClick={onRowSelect} />
      ) : (
        "No data here, please add new one"
      )}
      <input
        className="big-button"
        type="button"
        value="Add new student"
        placeholder="Add new student"
        onClick={(x) => {
          onRowSelect(null);
        }}
      ></input>
      {selectedRow ? (
        <StudentEditor
          data={selectedRow}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onCancel={onCancel}
        />
      ) : null}
    </React.Fragment>
  );
}
