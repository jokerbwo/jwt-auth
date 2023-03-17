import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route  element={<Navbar/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}
 
export default App;
