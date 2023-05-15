import React, {useState} from 'react'
import styles from '../../styles/Cards/CardProgres.module.css'

export default function CardProgres() {
const [progress, setProgress] = useState(125);

function handleProgressChange(event) {
  setProgress(event.target.value);
}

return (
  <div className={styles.containerProgres}>
    <p className={styles.title}>PROGRESO DE PELICULAS PRODUCIDAS</p>
    <div className={styles.progres}>
        <div className={styles.goals}>
            {/* <input className={styles.input} type="number" min="0" max="200" value={progress} onChange={handleProgressChange} /> */}
            <p className={styles.textGoals}>200 Peliculas</p>
        </div>
        <p className={styles.prod}>Meta de produccion</p>
        <div className={styles.wrapperProgresBar}>
            <progress className={styles.progresBar} value={progress} max="200"/>
        </div>
    </div>
  </div>
);

}
