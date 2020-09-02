import React, { useState, useEffect } from "react";
import "./studentEditor.css";
import ControlBar from "./controlBar";

export default function StudentEditor(props) {
  var [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(props.data);
  }, [props.data]);

  function onDataChange(e) {
    var value = e.target.value;
    if (e.target.name === "Age") {
      value = parseInt(value);
    }

    setFormData({ ...formData, [e.target.name]: value });
  }

  return (
    <form>
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={formData.Name}
        onChange={(e) => onDataChange(e)}
      ></input>
      <input
        type="number"
        name="Age"
        placeholder="Age"
        value={formData.Age}
        onChange={(e) => onDataChange(e)}
      ></input>
      <input
        type="text"
        name="CompanyName"
        placeholder="Company Name"
        value={formData.CompanyName}
        onChange={(e) => onDataChange(e)}
      ></input>
      <ControlBar
        onDelete={(e) => {
          props.onDelete(formData);
        }}
        onUpdate={(e) => {
          props.onUpdate(formData);
        }}
        onCancel={props.onCancel}
      />
    </form>
  );
}
