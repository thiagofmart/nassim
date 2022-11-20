import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css'

export default function Header(){
    useEffect(()=> {
        window.addEventListener('scroll', setFixed)
        return () => window.removeEventListener('scroll', setFixed)
    })
    const [fix, setFix] = useState(false);

    function setFixed(){
        if(window.scrollY > 425){
            setFix(true)
        }else{
            setFix(false)
        }
    }


return(
    <>
    <div className={fix ? styles.fixedNav : styles.nav}>
      <div className="base">
        <ul className={styles.navItems}>
          <li>
            <img className={styles.logo_nassim} src="./assets/logomarca.png" alt="Nassim" />
          </li>
          <li><a href=''>home</a></li>
          <li><a href=''>sobre</a></li>
          <li><a href=''>serviços</a></li>
          <li><a href=''>contatos</a></li>
        </ul>
      </div>
    </div>
    <div className="base">
      <div className={styles.hero}>
        <div className={styles.heroPhrase}>
          <h1>We design for human, not alien</h1>
          <p>Change the world with your idea.</p>
          <button>Start Now</button>
        </div>
        <div className={styles.heroImage}>
          <img src="./assets/domore-header.jpeg" alt="ALT"/>
        </div>
      </div>
    </div>  
    </>

)
}