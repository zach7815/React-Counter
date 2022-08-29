import React, {useState} from "react";
import Button from "./components/button";
import './App.scss'

function App() {
const [count, SetCount]=useState(0);

const decreaseCount = ()=>{
  SetCount(count-1);
}
const increaseCount = ()=>{
  SetCount(count+1)
}





  return (
    <div className="App">

<h1> The count is:</h1>
<h3>{count}</h3>
<div className=" buttons">
<Button action={decreaseCount} title={`-`} />
<Button action={increaseCount} title={`+`} />
</div>

   

    </div>
  );
}

export default App;
