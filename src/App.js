import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Routers from "./router";
function App() {
  // const routes = useRoutes(router);
  const location = useLocation();
  console.log(location.pathname);
  return  (
    <Fragment>
      {/* <Navbar /> */}
      <Routers/>
      {/* <Footer /> */}
    </Fragment>
  ) 
}

export default App;
