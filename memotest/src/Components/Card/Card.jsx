import styles from './Card.module.css'

 
function Card ({number,image,view , firstCard , secondCards,  par, id , cardsArrays}) {


   const cardColor = () => {
      if (view === 'hidden') return  styles.hidden
      if (view === 'visible') return  styles.visible
      if (view === 'disable') return styles.disable
   
   }
   const cardImage = () => {

     if (view=== 'visible') return  <img src={image} className={styles.img}   alt="number" />
   }


   const handleChange = () =>{


      
      firstCard(number,id,par)
   }


   return (

      <div className={styles.Card}>
     
         <button  onClick={(
         )=>handleChange()}  className={cardColor(view)}   disabled={secondCards}>
            {cardImage()}
        </button>
     
      </div>
   )
}

export default Card