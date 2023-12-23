import React, { useEffect } from "react"
import styles from './Card.module.css'

 
function Card ({number,image,disable,view , firstCard  ,click, secondCard, par, id}) {
 

   const cardColor = () => {
   if (view===true && disable===true) return styles.divCardIgual
   if (view===true) return styles.divCard
   else return styles.fliCardInner
   }
   const cardImage = () => {
      if (view===true && disable===true) return 
      if (view===true) return 
      else return ( <img src={image} className={styles.img}   alt="number" />)
      }


   const handleChange = (number, id) =>{
     
      click%2 === 0 && firstCard(number,id)
      click%2 === 1 && secondCard(number,id)


   }
   return (

      <div className={styles.flipCard}>
     
         <button  onClick={(
         )=>handleChange(number,id)}  className={cardColor()}  >
            {cardImage()}
        </button>
     
      </div>
   )
}

export default Card