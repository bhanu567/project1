import "./Display.css";
import DisplayData from "./DisplayData";
const Display = (props) => {
  return (
    <div className="display">       
      {props.Data.map((data)=><DisplayData item={data} key={Math.random().toString()}/>)}
    </div>
  );
};
export default Display;
