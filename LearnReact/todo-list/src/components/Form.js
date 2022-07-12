import React from "react";

function handleSubmit(e) {
  e.preventDefault();
  console.log("hello");
}


export default function Form() {
    return (
        <form onSubmit={handleSubmit()}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" />
            <button type="button" className="btn btn__primary btn__lg">Add</button>
        </form>
    );
}
