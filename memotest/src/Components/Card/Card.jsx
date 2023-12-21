import React, { useEffect } from "react"

 
function Card ({number,image,disable,view , firstCard  ,click, secondCard, par, id}) {
 

   const cardColor = () => {
   if (view===true && disable===true) return 'divCardIgual'
   if (view===true) return 'divCard'
   else return 'fli-card-inner'
   }
   const cardImage = () => {
      if (view===true && disable===true) return 
      if (view===true) return 
      else return ( <img src={image} className="img"   alt="number" />)
      }


   const handleChange = (number, id) =>{
     
      click%2 === 0 && firstCard(number,id)
      click%2 === 1 && secondCard(number,id)


   }
   return (

      <div className="flip-card ">
     
         <button  onClick={(
         )=>handleChange(number,id)}  className={cardColor()}  >
            {cardImage()}
        </button>
     
      </div>
   )
}

export default Card