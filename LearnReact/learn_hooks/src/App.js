import React from "react";
import { GridTutorial } from "./components/GridTutorial";

const App = () => {
  const Datas = [1,2,3,4,5,6];
  const classN = [];
  const bi = "div" + Datas.map(data=> data);
 

  const listData = Datas.map(data => <GridTutorial id={data}/>); 
  return(
    // <StateTutorial/>
    <div>
    {listData}
    <button onClick={() =>{console.log(bi)}}>button</button>
    </div>
  );
};

export default App;

