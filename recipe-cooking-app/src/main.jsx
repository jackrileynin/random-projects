import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Instructions from './pages/instructions.jsx';
import RecipeList from './componts/recipePage.jsx';
import MainPage from './componts/firstPage.jsx';
import './index.css';


document.getElementById('root').style.width = '100%';
document.getElementById('root').style.backgroundColor = '#6B8E23';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/firstPage/' element={<MainPage />} />
        <Route path="/instructions/:id" element={<Instructions />} />
        <Route path="/componts/recipePage" element={< RecipeList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);