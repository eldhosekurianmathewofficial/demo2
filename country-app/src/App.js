import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCountry from './components/AddCountry';
import ViewCountry from './components/ViewCountry';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><NavBar/><AddCountry/></>}/>
  <Route path="/view" element={<><NavBar/><ViewCountry/></>}/>

        </Routes>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
