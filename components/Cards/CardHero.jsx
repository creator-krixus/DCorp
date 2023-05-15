import React from 'react'
import left from '../../assets/left.png'
import rigth from '../../assets/rigth.png'
import styles from '../../styles/Cards/CardHero.module.css'
import Image from 'next/image'

export default function CardHero({ image, name, comics, movies }) {
  return (
    <div className={styles.card}>
    <div className={styles.name}>
      <Image className={styles.gif} src={left} alt='left' />
      <h2>{name}</h2>
      <Image className={styles.gif} src={rigth} alt='rigth' /> 
    </div>
    <div className={styles.boxAvatar}>
      <img className={styles.avatar} src={image} alt={name} />
    </div>
    <p className={styles.comics}>Comics: <span className={styles.span}>{comics}</span></p>
    <p className={styles.movies}>Peliculas: <span className={styles.span}>{movies}</span></p>
  </div>
  )
}
