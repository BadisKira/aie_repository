import './App.css';
import Home from "./pages/home";
import Error404 from './components/Error404';
import AboutUs from './pages/aboutUs';
import ArrowUp from "./components/ArrowUp";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import RegisterForm from "./pages/LoginRegister";

function App() {
  return (<>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/hotels' element={<Home />} />
      <Route path='/propos' element={<AboutUs />} />
      <Route path='/voyages' element={<Home />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/login' element={<RegisterForm />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <ArrowUp targetId={"navbarId"} />
  </>
  );
}

export default App;
