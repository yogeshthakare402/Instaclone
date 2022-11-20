import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
// import PostviewPage from './PostviewPage/PostviewPage';
import InstaPost from './InstaPost/InstaPost';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/instaPost' element={<InstaPost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
