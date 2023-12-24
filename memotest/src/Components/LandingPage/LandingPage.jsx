import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'
import { GameContext } from '../../contexts/GameContext';

const LandingPage = () => {
    const { cardsArray, setCardsArray } = useContext(GameContext);

    console.log(cardsArray, 'context')

    const generateArray = (number) => {
// Esta funcion te crea un array a partir del numero q le pases, quizas te sirva para hacerlos, podes retornar otra cosa.
       const newCardsArray =  [...Array(number)].map((item, idx) => {
           return {
            name: `test${idx}`
            }
        })
    // setea en el contexto el array para agarrarlo del otro lado, esta funcion es del context para setearlo
        setCardsArray(newCardsArray)
        // aca podrias hacer un history.go() derecho a la pagina del juego y sacar el link de abajo.
    }
    
    return (

    <div className={styles.landing}>
        <p className='display-1 text-white'><b>MEMOTEST</b></p>
{/* aca comente el boton para que veas como podes usarlo */}
        {/* <button className={styles.button}>
             <Link className={styles.text} to='/container'>empezar</Link>
        </button> */}
        <button className={styles.button} onClick={() => generateArray(8)}>
             <Link className={styles.text} to='/container'>8</Link>
        </button>
        <button className={styles.button} onClick={() => generateArray(16)}>
             <Link className={styles.text} to='/container'>16</Link>
        </button>
       
    </div>
)}



export default LandingPage;