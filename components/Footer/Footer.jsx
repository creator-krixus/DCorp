import styles from '../../styles/Footer/Footer.module.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/square-github.svg'
import email from '../../assets/envelope-solid.svg'
import Image from 'next/image';
// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//         <p>Wilson Rueda</p>
//         <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
//     </footer>
//   );
// };
const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div>
          <p className={styles.text}>Wilson Rueda</p>
        </div>
        <div>
          <ul className={styles.icons}>
            <li className={styles.list}>
              <a className={styles.link} href="https://www.linkedin.com/in/wilson-rueda-63273b1ab/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={linkedin} alt="Logo de LinkedIn" width="24" height="24" />
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.link} href="https://github.com/creator-krixus" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="Logo de GitHub" width="24" height="24" />
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.link} href="mailto:wilsonrueda2@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src={email} alt="email" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.text2}>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  };

export default Footer;
