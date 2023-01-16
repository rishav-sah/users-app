import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserComponent from "./UserComponent.js";
import { fetchUsers } from "../reducers/usersSlice.js";
import { Link } from "react-router-dom";

const UserContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="w-full">
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error ? <div>Error Component</div> : null}
      {
        !users.loading && users.listOfUsers.length ? (
          <div className="p-5 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center bg-slate-200">
            {users.listOfUsers.map((users) => (
              <Link key={users?.login?.uuid} to={`users/${users?.login?.uuid}`}>
                <UserComponent users={users} />
              </Link>
            ))}
          </div>
        ) : null
      }
    </div>
  );
};

export default UserContainer;
