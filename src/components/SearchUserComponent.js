import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../reducers/usersSlice.js";

const SearchUserComponent = () => {
  const listOfUsers = useSelector((state) => state.users.listOfUsers);
  const dispatch = useDispatch();

  // search logic
  // const filterUsers = (searchValue) => {
  //   const filteredUsers = listOfUsers.filter((user) => {
  //     for (const value of Object.values(user)) {
  //       if (value.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) return user;
  //     }
  //   });
  //   console.log(filteredUsers);
  // };

  const handleInput = (e) => {
    console.log(e.target.value);
    dispatch(getItems())
    console.log(listOfUsers);
  };

  return (
    <div>
      <form className="w-80" onSubmit={(e) => e.preventDefault()}>
        <input className="p-2 w-full border rounded-md border-black " type="text" placeholder="Search Users" onChange={handleInput}/>
      </form>
    </div>
  );
};

export default SearchUserComponent;