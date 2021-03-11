import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import League from './Components/League/League';

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path ="/league/:id">
          <League></League>
        </Route>
        <Route path ="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
