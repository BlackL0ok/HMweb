import './navbar/Navbar.js'
import './static/css/App.scss';
import {Fragment} from "react";
import Navbar from "./navbar/Navbar";
import HomePage from "./homePage/HomePage"

const classe = {
    'app' : 'App'
}
function App() {
  return (
      <Fragment className={classe.app}>
          <Navbar/>
          <HomePage/>
      </Fragment>
  );
}

export default App;
