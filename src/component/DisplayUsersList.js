import "./DisplayUsersList.css";
const DisplayUsersList = (props) => {
  return (
    <div className="box" >
      {props.listItem.name}({props.listItem.age} years only) is studying in {props.listItem.college}
    </div>
  );
};
export default DisplayUsersList;
