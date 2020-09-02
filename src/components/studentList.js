import React from "react";
import Student from "./student";
import "./studentList.css";

export default function StudentList(props) {
  return (
    <section className="data-list">
      {props.data.map((item, index) => {
        return (
          <Student key={index} data={item} onRowClick={props.onRowClick} />
        );
      })}

      <div className="clr"></div>
    </section>
  );
}
