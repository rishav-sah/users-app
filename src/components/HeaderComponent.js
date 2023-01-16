import { Link } from "react-router-dom";
import SearchUserComponent from "./SearchUserComponent.js";

const HeaderComponent = () => {
  return(
    <header className="m-3 p-3 flex justify-between items-center">
      <div className="w-20">
        <Link to="/">
          <img className="w-full" src="https://static6.depositphotos.com/1005993/633/v/450/depositphotos_6338152-stock-illustration-real-estate-logo.jpg" alt="" />
        </Link>
      </div>
      <SearchUserComponent />
      <nav>
        <ul>
          <li className="mx-2 font-medium text-slate-600">
            <Link to="/about-us">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;