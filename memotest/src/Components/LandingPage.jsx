import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    
    return (
    <div className='landing'>
        <h1>MEMOTEST</h1>
        <button className='button'>
             <Link  to='/container'>Empezar</Link>
        </button>
       
    </div>
)}



export default LandingPage;