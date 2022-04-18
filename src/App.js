import './App.css';
import Home from "./pages/home";
import Error404 from './components/Error404';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <Switch>
      <Route exact path="/"> <Home /></Route>
      <Route ><Error404 /> </Route>
    </Switch>
  );
}

export default App;
