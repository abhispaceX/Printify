import HomePage from './components/HomePage';
import {  
  BrowserRouter ,   
  Routes,  
  Route,  
   
}   
from 'react-router-dom';


import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
