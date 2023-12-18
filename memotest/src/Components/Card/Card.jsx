import React, { useEffect } from "react"

 
function Card ({number,image,disable,view , firstCard  ,click, secondCard, par}) {
 

   const cardColor = () => {
   if (view===true && disable===true) return 'divCardIgual'
   if (view===true) return 'divCard'
   else return 'divCardFalse'
   }

   const handleChange = (number) =>{

      click%2 === 0 && firstCard(number)
      click%2 === 1 && secondCard(number)


   }
   return (

      <div className="card">
         <button onClick={()=>handleChange(number)} disabled={disable} className={cardColor()}  >
              {par}
        </button>
      </div>
   )
}

export default Card