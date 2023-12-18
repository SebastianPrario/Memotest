import React, { useEffect, useState } from "react"
import Card from "../Card/Card"
import arrayCard from "../../Json/arrayCard"


 
function Container () {

    const [ disable , setDisable ] = useState (false)
    const [ click , setClick ] = useState (0)
    const [ times , setTimes ] = useState (20)
    const [ firstCards, setFirstCards ] = useState()
    const [ arrayCards , setArrayCards ] = useState (arrayCard)
   
   
   
    const firstCard = (number) => {
             
        setTimes(times-1)
        setClick(click+1)
        setFirstCards(arrayCard[number-1]) 
        
        const nextCard = arrayCards.map(card => {
            if (card.number !== number) {
                return card;
            } else {
               if (card.view===true) return { ...card, view:false}
              else return { ...card , view:true}
               
            }
        })
    
        setArrayCards(nextCard)
    }

    const compara = (number) => {
     
        if (firstCards.par === arrayCards[number-1].par) {
            alert ( 'iguales')
            const nextCard = arrayCards.map(card => {
                if (card.number === firstCards.number || card.number === number) {
                return  { ...card, view:true, disable:true };
                } else {return card }
            })
            setArrayCards(nextCard)
        } else { 
            alert ('distintos')
            setFirstCards()
            const nextCard = arrayCards.map(card => {
            if (card.number === firstCards.number || card.number === number) {
                return  { ...card, view:true};
            } else { return card };               
            })
            setArrayCards(nextCard)
        }

        setFirstCards()
    }

    const secondCard = (number) => {
      
        if (number == firstCards.number) { return  alert('no puede elegir el mismo')}

        setTimes(times-1)
        setClick(click+1)
       
        
        const nextCard = arrayCards.map(card => {
            if (card.number !== number) {
                return card;
            } else {
               if (card.view===true) return { ...card, view:false}
              else return { ...card , view:true}
               
            }
        })
        setArrayCards(nextCard)

        setTimeout(() => {
           compara(number) 
        }, 1000);
    }
   
   

    return (

        <div>
            <p>CARD COMPONENT</p>
            <h2>{times}</h2>
            <hr></hr>
            {arrayCards.map (elem => 
                
                (  <Card 
                    key= {elem.number}
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
    )
}


export default Container

