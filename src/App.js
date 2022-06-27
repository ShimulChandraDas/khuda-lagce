import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp";
import Navbar from './Components/Pages/Home/Navbar';
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
