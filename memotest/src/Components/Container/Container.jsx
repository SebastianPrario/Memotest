import React, { useEffect, useState, useContext } from "react"
import Card from "../Card/Card"
import { GameContext } from "../../contexts/GameContext"
import Swal from "sweetalert2"
import styles from './Container.module.css'
import gameOver from '../../assets/game over.jpg'



const mostrarAlerta  = (title,icon) => {

    Swal.fire({
        title: title,
        icon: icon,
        timer: "1000",
        showConfirmButton: false,
        
     

    })
}

const mostrarGanaste = async (setCardsArray) => {
    await Swal.fire({
    imageUrl: "https://thumbs.dreamstime.com/z/ganaste-el-texto-de-la-pancarta-con-un-fondo-c%C3%B3mico-azul-ilustraci%C3%B3n-del-vector-168164092.jpg",
    imageWidth: 300,
    imageHeight: 200,
    showConfirmButton: false,
    timer: 2000,
    imageAlt: "Custom image",
    }) 
    setCardsArray()
   
};


 
function Container () {
    
    const { cardsArray , setCardsArray} = useContext(GameContext);
    const [ count , setCount ] = useState ()  
    const repeticiones = cardsArray.length>16 ? 30 : 20
    const [ times , setTimes ] = useState (repeticiones)
    const [ firstCards, setFirstCards ] = useState()
    const [ secondCards, setSecondCards ] = useState()
    const [ cardsArrays , setcardsArrays ] = useState ()
   
   
   
    const firstCard = (number , id) => {
        if (firstCards && number === firstCards.number) return mostrarAlerta('Repetido!','warning')
               
        setTimes(times-1)
      
        if (!firstCards) {
           
            setFirstCards(cardsArray[id])
            const nextCard = cardsArrays.map(card => {
                if (card.number !== number) {
                    return card;
                } else return { ...card, view:'visible'}
            })
            setcardsArrays(nextCard)
    
        }
        else {
           
            setSecondCards(cardsArray[id])
            const nextCard = cardsArrays.map(card => {
                if (card.number !== number) {
                    return card;
                } else return { ...card, view:'visible'}
            })
          
            setcardsArrays([...nextCard])
          
     
        }
      
    }
   
    const reset =  () =>  {
      
        const newArray =  cardsArray.sort(() => Math.random() - 0.5);
        setcardsArrays(newArray)
        setTimes(repeticiones)
        setCount(2)
    }
   
     
    const turnos = async () => {
       
        if (times  === 0) 
            { await  Swal.fire({
            imageUrl: gameOver,
            imageWidth: 300,
            imageHeight: 300,
            background: 'blue',
            showConfirmButton: false,
            timer: 2000,
            imageAlt: "Custom image"})
            setCardsArray() //vacia el array y vuelve a la landing page
        }
    }
  
    const compara = () => {
        if (!firstCards || !secondCards)  return
        if (firstCards.par === secondCards.par) {
            
            mostrarAlerta('Iguales!','success')
          
            const nextCard = cardsArrays.map(card => {
                if (card.view == 'visible') return  { ...card, view: 'disable' }
                else {return card }
            })
            

            setcardsArrays(nextCard)

            setCount ( count + 2) 
            
            if( count === cardsArray.length ) { 
                mostrarGanaste(setCardsArray())
                return reset()
            }
                

        } else { 
          
            mostrarAlerta('Distintos!','error')
           
            const nextCard = cardsArrays.map(card => {
            if (card.number === firstCards.number || card.number === secondCards.number) {
                return  { ...card, view: 'hidden'};
            } else { return card }               
            })
            setcardsArrays(nextCard) 
            
        }
             setFirstCards()
             setSecondCards()
             turnos()
             
            
      
      
    }
    
    const cardLength  =() => {
        if (!!cardsArrays){
        if (cardsArrays.length < 9 ) return styles.small
        if (cardsArrays.length === 16 ) return styles.medium
        if (cardsArrays.length === 20 ) return styles.large
        }
    }
   

   
   useEffect (() => { reset() } , [])
   useEffect (() => {  setTimeout(() => {
            compara()

           

         }, 1000) } , [firstCards,secondCards])
     
   return (

        <div className={styles.nav}>
            <div className={styles.nav2}>
            <h9>número de intentos</h9>
            <h2>{times}</h2>
            </div>
            <hr></hr>
            <div className={cardLength()}>
            {cardsArrays?.map ((elem ,index) => 
                
                (  <Card 
                    key= {elem.number}
                    id = {index}
                    number = {elem.number}
                    image = {elem.image}
                    view =  {elem.view}
                    disable = {elem.disable}
                    firstCard = {firstCard}
                    secondCards = {secondCards}
                    cardsArrays = {cardsArrays}
                    styles = {cardLength()}
                    par={elem.par}
                    />
                )
            )}
            </div>
        </div>
    )
}


export default Container

