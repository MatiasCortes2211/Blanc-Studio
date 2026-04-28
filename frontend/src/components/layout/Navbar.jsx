import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>blanc</span>
      <ul className={styles.links}>
        <li><a href="#servicios">servicios</a></li>
        <li><a href="#trabajos">trabajos</a></li>
        <li><a href="#nosotros">nosotros</a></li>
        <li><a href="#contacto">contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar