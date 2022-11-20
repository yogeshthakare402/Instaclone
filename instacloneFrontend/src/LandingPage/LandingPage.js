import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';


function LandingPage() {
  const navigate = useNavigate();
  const onClickLand = ()=>{
    navigate('/instaPost');
  }

  return (
    <div>
      <h2>LandingPage</h2>
      <div className="clonepage">
        <div className="image">
          <img src='../images/icon.png' alt="icon" />
        </div>
        <div>
          <h1>10X Team 04</h1>
          <button onClick={onClickLand} className='landingbtn'>Enter</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage