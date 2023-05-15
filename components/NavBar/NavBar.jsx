import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/Marvel_Studios.webp';
import Campana from '../../assets/Campana.png';
import Settings from '../../assets/settings.png'
import styles from '../../styles/NavBar/NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
            <Image className={styles.image} src={Logo} alt="logo"/>
            <p className={styles.home}>Home</p>
            <p className={styles.personales}>Personales</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.campana}>
            <Image  src={Campana} alt="campana"/>
          </div>
          <div className={styles.settings}>
            <Image  src={Settings} alt="settings"/>
          </div>
        </div>
    </div>
  )
}
