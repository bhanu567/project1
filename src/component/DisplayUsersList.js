import "./DisplayUsersList.css";
const DisplayUsersList = (props) => {
  return (
    <div className="box" >
      {props.listItem.name}({props.listItem.age} years only)
    </div>
  );
};
export default DisplayUsersList;
