import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp";
import Navbar from './Components/Pages/Home/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Landing from './Components/Pages/Landing/Landing';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        {
          user &&
          <Route path='/landing' element={<Landing />}> </Route>

        }
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
