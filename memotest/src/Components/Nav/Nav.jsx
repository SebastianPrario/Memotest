import React from 'react';
import styles from './Nav.module.css'
import logo from '../../assets/logo.png'

const Nav = ({times ,setCardsArray}) => {
    return (
        <div className={styles.nav}>
            <div className={styles.div}><img src={logo} alt='logo' className={styles.img} /></div>
            <p className={styles.h1}>numero de  intentos : {times} </p>
            <button  className={styles.btn} onClick={()=> setCardsArray()}>inicio</button>
        </div>
      )
}


// #endregion

export default Nav;