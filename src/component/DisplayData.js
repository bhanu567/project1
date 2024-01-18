import "./DisplayData.css";
const DisplayData = (props) => {
  return (
    <div className="box" >
      {props.item.name}({props.item.age} years only)
    </div>
  );
};
export default DisplayData;
