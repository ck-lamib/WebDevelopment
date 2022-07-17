import React, { useState } from "react";


export const StateTutorial = () => {

    // example 1 counter
    /*const [value, setValue] = useState(0);
    const increment = () => {
        setValue(value + 1);
    }
    const decrement = () => {
        setValue(value - 1);
    }
    return (<div style={{textAlign: "center"}}>
    <button onClick={decrement}>decrement</button>
        {value}
        <button onClick={increment}> increment</button>
    </div>);*/

    // example 2 getting a input value
    const [word, setWord] = useState("Bimal");
    const handleChange = (e) => {
        setWord(e.target.value);
    }
    return (
        <div className="stateTutorial">
            <input placeholder="Type smth here ..." onChange={handleChange}/>
            {word}
        </div>
    );
};
