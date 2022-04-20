import './App.css';
import Home from "./pages/home";
import Error404 from './components/Error404';
import AboutUs from './pages/aboutUs';
import { Route, Switch } from "react-router-dom";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Switch>
      <Route exact path="/"> <Home /></Route>
      <Route exact path='/hotels' ><Home />  </Route>
      <Route exact path='/propos' ><AboutUs />  </Route>
      <Route exact path='/voyages' ><Home />  </Route>
      <Route exact path='/contact' ><ContactUs /> </Route>
      <Route ><Error404 /> </Route>
    </Switch>
  );
}

export default App;
