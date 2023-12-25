import React, { useEffect, useState, useContext } from "react"
import Card from "../Card/Card"
import { GameContext } from "../../contexts/GameContext"
import Swal from "sweetalert2"
import styles from './Container.module.css'



const mostrarAlerta  = (title,icon) => {

    Swal.fire({
        title: title,
        icon: icon,
        timer: "1000",
        showConfirmButton: false,
        
     

    })
}

const mostrarGanaste = () => {Swal.fire({
    imageUrl: "https://thumbs.dreamstime.com/z/ganaste-el-texto-de-la-pancarta-con-un-fondo-c%C3%B3mico-azul-ilustraci%C3%B3n-del-vector-168164092.jpg",
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: "Custom image"
  })};


 
function Container () {
    
    const { cardsArray } = useContext(GameContext);
    const [ count , setCount ] = useState ()
    const [ click , setClick ] = useState (0)
    const repeticiones = cardsArray.length>16 ? 30 : 20
    const [ times , setTimes ] = useState (repeticiones)
    const [ firstCards, setFirstCards ] = useState()
    const [ cardsArrays , setcardsArrays ] = useState ()
   
   
   
    const firstCard = (number , id ) => {
     
        setTimes(times-1)
        setClick(click+1)
        setFirstCards(cardsArray[id]) 
        console.log(number)
        const nextCard = cardsArrays.map(card => {
            if (card.number !== number) {
                return card;
            } else {
               if (card.view===true) return { ...card, view:false}
              else return { ...card , view:true}
               
            }
        })
    
        setcardsArrays(nextCard)
    }

    const reset =  () =>  {
      
        const newArray =  cardsArray.sort(() => Math.random() - 0.5);
        setcardsArrays(newArray)
        setTimes(repeticiones)
        setClick(0)
        setCount(2)
    }
   
     
    const turnos = () => {
      
        if (times -1  === 0) 
            {   Swal.fire({
            imageUrl: "https://portal.33bits.net/wp-content/uploads/2018/12/gameoverphrase.jpg",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Custom image"})
            reset()
           
        }
    }
  
    const compara = (number, id) => {
     
        if (firstCards.par === cardsArrays[id].par) {
            mostrarAlerta('Iguales!','success')
            
            const nextCard = cardsArrays.map(card => {
                if (card.number === firstCards.number || card.number === number) {
                return  { ...card, view:true, disable:true };
                } else {return card }
            })
            setcardsArrays(nextCard)
            setCount ( count + 2) 
            if( count === cardsArray.length ) { 
                mostrarGanaste()
                return reset()
            
            }
                

        } else { 
          
            mostrarAlerta('Distintos!','error')
            setFirstCards()
            const nextCard = cardsArrays.map(card => {
            if (card.number === firstCards.number || card.number === number) {
                return  { ...card, view:true};
            } else { return card }               
            })
            setcardsArrays(nextCard)
        }
             setFirstCards()
             turnos()
      
      
    }

    const secondCard = (number , id ) => {
      
        if (number == firstCards.number) { return  mostrarAlerta('Repetido!','error')}

        setTimes(times-1)
        setClick(click+1)
       
        
        const nextCard = cardsArrays.map(card => {
            if (card.number !== number) {
                return card;
            } else {
               if (card.view===true) return { ...card, view:false}
              else return { ...card , view:true}
               
            }
        })
        setcardsArrays(nextCard)

        setTimeout(() => {
           compara(number ,id) 
        }, 1000);
    }
   
   useEffect (() => { reset() } , [])

   console.log(cardsArray, 'context dentro de container')
 


    return (

        <div className={styles.nav}>
            <p>número de intentos</p>
            <h2>{times}</h2>
            <hr></hr>
            <div className={styles.container}>
            {cardsArrays?.map ((elem ,index) => 
                
                (  <Card 
                    key= {elem.number}
                    id = {index}
                    number = {elem.number}
                    image = {elem.image}
                    view =  {elem.view}
                    disable = {elem.disable}
                    firstCard = {firstCard}
                    secondCard={secondCard}
                    click={click}
                    par={elem.par}
                    />
                )
            )}
            </div>
        </div>
    )
}


export default Container

