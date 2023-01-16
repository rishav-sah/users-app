import { useParams } from "react-router-dom";

const UserDetailsComponent = ({ users }) => {
  const { id } = useParams();
  return(
    <div>
      <p>User UUID - {id}</p>
       <span>The api doesn't supports get request by id</span>
    </div>
  );
};

export default UserDetailsComponent;