import { useDispatch } from "react-redux";
import { searchUsers } from "../reducers/usersSlice.js";

const SearchUserComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form className="w-80" onSubmit={(e) => e.preventDefault()}>
        <input className="p-2 w-full border rounded-md border-black " type="text" placeholder="Search Users" onChange={(e) => dispatch(searchUsers(e.target.value))}/>
      </form>
    </div>
  );
};

export default SearchUserComponent;