import React from "react";
import "./student.css";

export default function Student(props) {
  return (
    <ul className="list" onClick={(e) => props.onRowClick(props.data)}>
      <li>{props.data.Name}</li>
      <li>{props.data.Age}</li>
      <li>{props.data.CompanyName}</li>
    </ul>
  );
}
