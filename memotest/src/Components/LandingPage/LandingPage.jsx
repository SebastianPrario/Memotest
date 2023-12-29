import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'
import { GameContext } from '../../contexts/GameContext';
import {arrayCard, stumble} from '../../Json/arrayCard';

const LandingPage = () => {
    const { cardsArray, setCardsArray } = useContext(GameContext);
    const [ tematica ,setTematica ] = useState ()


    const generateArray = (number) => {
       const newCardsArray =  arrayCard.slice(0,(number)).map((item, idx) => {
       if (tematica==='futbol') return item
       if (tematica==='stumble') return {...item ,image : stumble[idx]}})
       newCardsArray && setCardsArray(newCardsArray)
    }
       
    return (

    <div className={styles.landing}>
        <p className='display-1 text-white'><b>MEMOTEST</b></p>
        <div className="dropdown mb-1">
            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="true">
               Categoria
            </button>
            <ul className="dropdown-menu" aria-labelledby="value" data-toggle='dropdown'>
                <li><button className="dropdown-item" type="button" value='futbol' onClick={() =>{
                    document.getElementById('dropdownMenu1').innerHTML = 'futbol'
                    setTematica('futbol')}}
                >futbol</button></li>
                <li><button className="dropdown-item" type="button" value='stumble' onClick={() => {
                    document.getElementById('dropdownMenu1').innerHTML = 'stumble'
                    setTematica('stumble')}}>stumble</button></li>
            </ul>
        </div>
        <div className="dropdown mb-1">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
                dificultad
            </button>
            <ul className="dropdown-menu" aria-labelledby="value" data-toggle='dropdown'>
                <li><button className="dropdown-item" type="button" value='facil' onClick={() => {
                    document.getElementById('dropdownMenu2').innerHTML = 'facil'
                    generateArray(8)}}>facil</button></li>
                <li><button className="dropdown-item" type="button" value='medio' onClick={() => {
                    document.getElementById('dropdownMenu2').innerHTML = 'medio'
                    generateArray(16)}}>medio</button></li>
                <li><button className="dropdown-item" type="button" value='dificil' onClick={() =>{
                     document.getElementById('dropdownMenu2').innerHTML = 'dificil'
                    generateArray(20)}}>difícil</button></li>
            </ul>
        </div>
     
    </div>
)}



export default LandingPage;