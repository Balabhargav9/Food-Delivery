import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';

import Cards from './Cards';



function App() {
  return (
    <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/cards" element={<Cards/>}/>
<Route path="/signup" element={<SignUp/>} />
<Route path="/home" element={<Home/>} />
    </Routes>
    
  );
}

export default App;
