import React, {useState} from "react";
import "./Form.css";

const Form = (props) => {
  const [name, setName]=useState('');
  const [age, setAge] = useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    if(age<=0){
      prompt("Please Enter a valid age >0");
      setAge('');
      setName('');
    }
    else if(name.trim().length===0 || age.trim().length===0){
      prompt("Please Enter a valid name and age(non-empty values)");
      setAge('');
      setName('');
    } else{
      const data={
        name:name,
        age:age
      }
      props.Submit(data);
      setAge('');
      setName('');
    }
    
  }
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>Age(years)</label>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}></input>
        <button>Add User</button>
      </form>
    </div>
  );
};
export default Form;
