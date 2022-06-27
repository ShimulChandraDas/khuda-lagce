import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp";
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
