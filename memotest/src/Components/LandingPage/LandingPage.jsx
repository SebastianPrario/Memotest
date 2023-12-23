import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'

const LandingPage = () => {

    
    return (

    <div className={styles.landing}>
        <p className='display-1 text-white'><b>MEMOTEST</b></p>
        <button className={styles.button}>
             <Link className={styles.text} to='/container'>empezar</Link>
        </button>
       
    </div>
)}



export default LandingPage;