import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'
import { GameContext } from '../../contexts/GameContext';
import {arrayCard, stumble} from '../../Json/arrayCard';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from "sweetalert2"





  
  
  
const LandingPage = () => {
   
    const { cardsArray, setCardsArray } = useContext(GameContext);
    const [ tematica ,setTematica ] = useState ()
    const [ getFotos ,setGetFotos ] = useState ()

    async function mostrarSwal() {
        const {value : selection }= await Swal.fire({
            title: 'Elige una categoria',
            input: 'select',
            inputOptions: {
            'categorias': {
                river: 'Rios',
                person: 'Personas',
                city: 'Ciudades',
                animals: 'Animales'
            },
            'Comidas': {
                fruit: 'Frutas',
                vegetables: 'Verduras',
            },
            'landscapes': 'Paisajes',
           
            },
            inputPlaceholder: 'Elige una categoria',
            showCancelButton: true,
        })
        const url = `https://api.unsplash.com/search/photos?page=1&w=150&dpr=2&query=${selection}&client_id=4cpFHxYChXr2YCo9lOzilITP7Bk_dn-UpIIS2wj0xQQ`
        const response = await axios(url)
        const newArr = response && response.data.results.flatMap(elem => [elem.urls.thumb , elem.urls.thumb] )
        setGetFotos(newArr)
       
    }

    const generateArray = (number) => {
       const newCardsArray =  arrayCard.slice(0,(number)).map((item, idx) => {
       if (tematica==='futbol') return item
       if (tematica==='stumble') { return {...item ,image : stumble[idx]}}
       if (tematica==='personalizar') { return {...item ,image : getFotos[idx]}}})
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
                 <li><button className="dropdown-item" type="button" value='personalizar' onClick={() => {
                    document.getElementById('dropdownMenu1').innerHTML = 'personalizado'
                    mostrarSwal()
                    setTematica('personalizar')}}>personalizar</button></li>

            </ul>
        </div>
        <div className="dropdown mb-1">
            <button className="btn btn-secondary dropdown-toggle" disabled={!tematica} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
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