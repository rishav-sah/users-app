import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.js";
import store from "./store.js";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HeaderComponent />
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;