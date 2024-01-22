import "./UsersList.css";
import DisplayUsersList from "./DisplayUsersList";
const UsersList = (props) => {
  return (
    <div className="display">
      {props.usersData.map((user)=><DisplayUsersList listItem={user} key={Math.random().toString()}/>)}
    </div>
  );
};
export default UsersList;

// const UsersList = (props) => {
//   return (
//     <ul className="display">
//       {props.Data.map((data) => (
//         <li key={Math.random().toString()}>
//           {data.name} ({data.age} years old)
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default Display;
