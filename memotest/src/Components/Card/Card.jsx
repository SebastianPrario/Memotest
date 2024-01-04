import styles from './Card.module.css'

 
function Card ({number,image,view , firstCard ,secondCards, par, id ,cardsArrays}) {


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

      <div className={cardsArrays.length<9 ? styles.smallCard : styles.card}>
     
         <button  onClick={(
         )=>handleChange()}  className={cardColor(view)}   disabled={secondCards || view==='disable'}>
            {cardImage()}
        </button>
     
      </div>
   )
}

export default Card