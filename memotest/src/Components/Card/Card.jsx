import React, { useEffect } from "react"

 
function Card ({number,image,disable,view , firstCard  ,click, secondCard, par, id}) {
 

   const cardColor = () => {
   if (view===true && disable===true) return 'divCardIgual'
   if (view===true) return 'divCard'
   else return 'divCardFalse'
   }

   const handleChange = (number, id) =>{
      console.log(number, id)
      click%2 === 0 && firstCard(number,id)
      click%2 === 1 && secondCard(number,id)


   }
   return (

      <div className="card">
         <button onClick={(

         )=>handleChange(number,id)} disabled={disable} className={cardColor()}  >
              {number}
        </button>
      </div>
   )
}

export default Card