import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Login } from './Component/Login/Login';
import Register from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import Home from './Component/Home/Home';

function App() {
  var x = 5
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/reg" element={<Register/>}/>
           <Route path="/profile" element={<Profile/>}/>
       
      <Route path="*" element={<Register/>}/>
   
   
      </Routes>
      
    </div>
  );
}

export default App;
