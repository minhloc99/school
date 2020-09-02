import React from "react";
import "./controlBar.css";

export default function ControlBar(props) {
  return (
    <div className="control-bar">
      <ul>
        <li>
          <input type="button" value="Delete" onClick={props.onDelete}></input>
        </li>
        <li>
          <input type="button" value="Cancel" onClick={props.onCancel}></input>
        </li>
        <li>
          <input type="button" value="Update" onClick={props.onUpdate}></input>
        </li>
      </ul>
    </div>
  );
}
