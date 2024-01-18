import React, {useState} from "react";
import "./App.css";
import Form from "./component/Form";
import Display from "./component/Display";

function App() {
  const[display, setDisplay]=useState(false);
  const [data, setData] = useState([]);
  const isDisplay =(datas)=>{
    setData((data)=>{
      return [...data, datas];
    })
    setDisplay(true);
  }
  return (
    <div className="App">
      <Form Submit={isDisplay}/>
      {display?(<Display Data={data}/>):null}
    </div>
  );
}

export default App;
