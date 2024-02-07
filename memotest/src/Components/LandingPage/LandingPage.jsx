import React, { useContext, useState } from 'react';
import styles from './LandingPage.module.css'
import { GameContext } from '../../contexts/GameContext';
import {arrayCard, stumble} from '../../Json/arrayCard';
import axios from 'axios';
import Swal from "sweetalert2"
  
const LandingPage = () => {
   
    const { cardsArray, setCardsArray } = useContext(GameContext);
    const [ tematica ,setTematica ] = useState ()
    const [ arrayLength , setArrayLength] = useState()
    const [ getFotos ,setGetFotos ] = useState ()
    
    async function mostrarSwal() {
        const {value : selection }= await Swal.fire({
            title: 'Elige una categoria',
            input: 'select',
            inputOptions: {
           
                nature: 'Naturaleza',
                person: 'Personas',
                city: 'Ciudades',
                animals: 'Animales',
                fruit: 'Frutas',
                vegetables: 'Verduras',
                landscapes: 'Paisajes',
            },
            inputPlaceholder: 'Elige una categoría',
            showCancelButton: true,
        })
        const url = `https://api.unsplash.com/search/photos?page=1&w=150&dpr=2&query=${selection}&client_id=4cpFHxYChXr2YCo9lOzilITP7Bk_dn-UpIIS2wj0xQQ`
        const response = await axios(url)
        const newArr = response && response.data.results.flatMap(elem => [elem.urls.thumb , elem.urls.thumb] )
        setGetFotos(newArr)
       
    }
    async function mostrarSwal1() {
        const {value : selection }= await Swal.fire({
            title: 'Elige una categoria',
            input: 'text',
            inputLabel: 'categorias',
            inputPlaceholder: 'escribe una palabra en ingles',
            showCancelButton: true,
        })
        const url = `https://api.unsplash.com/search/photos?page=1&w=150&dpr=2&query=${selection}&client_id=4cpFHxYChXr2YCo9lOzilITP7Bk_dn-UpIIS2wj0xQQ`
        const response = await axios(url)
        const newArr = response && response.data.results.flatMap(elem => [elem.urls.thumb , elem.urls.thumb] )
        if (newArr.length<1) return Swal.fire("Esa Categoría No existe!");
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
        <p className={styles.title}>MEMOTEST</p>
        <div className="dropdown mb-1">
            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="true">
               Categoría
            </button>
            <ul className="dropdown-menu" aria-labelledby="value" data-toggle='dropdown'>
                <li><button className="dropdown-item" type="button" value='Fútbol' onClick={() =>{
                    document.getElementById('dropdownMenu1').innerHTML = 'Fútbol'
                    setTematica('futbol')}}
                >Fútbol</button></li>
                <li><button className="dropdown-item" type="button" value='stumble' onClick={() => {
                    document.getElementById('dropdownMenu1').innerHTML = 'Stumble'
                    setTematica('stumble')}}>Stumble</button></li>
                <li><button className="dropdown-item" type="button" value='personalizar' onClick={() => {
                    document.getElementById('dropdownMenu1').innerHTML = 'personalizado'
                    mostrarSwal()
                    setTematica('personalizar')}}>Otras Categorías</button></li>
                <li><button className="dropdown-item" type="button" value='personalizar' onClick={() => {
                    document.getElementById('dropdownMenu1').innerHTML = 'personalizado'
                    mostrarSwal1()
                    setTematica('personalizar')}}>Personalizar</button></li>

            </ul>
        </div>
        <div className="dropdown mb-1">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
                dificultad
            </button>
            <ul className="dropdown-menu" aria-labelledby="value" data-toggle='dropdown'>
                <li><button className="dropdown-item" type="button" value='facil' onClick={() => {
                    document.getElementById('dropdownMenu2').innerHTML = 'fácil'
                    setArrayLength(8)}}>fácil</button></li>
                <li><button className="dropdown-item" type="button" value='medio' onClick={() => {
                    document.getElementById('dropdownMenu2').innerHTML = 'medio'
                    setArrayLength(16)}}>medio</button></li>
                <li><button className="dropdown-item" type="button" value='dificil' onClick={() =>{
                     document.getElementById('dropdownMenu2').innerHTML = 'difícil'
                    setArrayLength(20)}}>difícil</button></li>
            </ul>
        </div>
        <button type="button" className={styles.btn} onClick={() => generateArray(arrayLength)}  disabled={!tematica || !arrayLength}>
            <a>EMPEZAR</a></button>
     
    </div>
)}
export default LandingPage;