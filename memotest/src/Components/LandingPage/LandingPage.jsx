import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'
import { GameContext } from '../../contexts/GameContext';
import arrayCard from '../../Json/arrayCard';

const LandingPage = () => {
    const { cardsArray, setCardsArray } = useContext(GameContext);

   

    const generateArray = (number) => {
// Esta funcion te crea un array a partir del numero q le pases, quizas te sirva para hacerlos, podes retornar otra cosa.
       const newCardsArray =  arrayCard.slice(0,(number))
    // comentado para la posibilidad de tomar datos de una fuente externa
    //    .map((item, idx) => {
          
    //         console.log(item)
            
    //     })
       
    // setea en el contexto el array para agarrarlo del otro lado, esta funcion es del context para setearlo
        newCardsArray && setCardsArray(newCardsArray)
      
    }
    
    return (

    <div className={styles.landing}>
        <p className='display-1 text-white'><b>MEMOTEST</b></p>
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


        <button className={styles.button} onClick={() => { !cardsArray && generateArray(8)}}>
            <Link className={styles.text} to='/container'>empezar</Link>
        </button>
       
       
    </div>
)}



export default LandingPage;