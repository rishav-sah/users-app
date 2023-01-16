
import { MdOutlineMail, MdOutlineHome } from "react-icons/md";
const UserComponent = ({ users }) => {
  const { picture, name, login, email, location } = users;
  // console.log(users);
  return (
    <section className="rounded-md m-4 p-4 w-80 bg-white drop-shadow">
      <div className="flex my-2 py-2">
        <div className="mr-4 w-16">
          <img className="w-full rounded-full" src={picture?.large} alt="User Photo" />
        </div>
        <div>
          <span className="block text-xl font-bold">{name?.title} {name?.first} {name?.first}</span>
          <span className="block text-sm text-slate-600">@{login?.username}</span>
        </div>   
      </div>
      <div>
        <span className="block text-slate-800">
          <MdOutlineMail className="mr-2 inline-block" />
          {email}
        </span>
        <span className="block text-slate-800">
          <MdOutlineHome className="mr-2 inline-block" />
          {location?.city}, {location?.country}
        </span>
      </div>
    </section>
  );
};

export default UserComponent;