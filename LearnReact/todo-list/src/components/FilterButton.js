import React from "react";

export default function FilterButton(props) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>{props.taskType} </span>
            <span className="visually-hidden">task</span>
        </button>
    );
}
