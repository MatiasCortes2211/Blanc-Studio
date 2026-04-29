import { useState } from 'react'
import styles from './Hero.module.css'

function Hero() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className={styles.hero}>
      <div className={styles.gradiente}></div>
      <h1
        className={styles.titulo}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={styles.textoNormal}
          style={{ opacity: hovered ? 0 : 1 }}
        >
          creamos diseños <br />
          que impulsan <br />
          tu marca
        </span>
        <span
          className={styles.textoBlend}
          style={{ opacity: hovered ? 1 : 0 }}
        >
          creamos diseños <br />
          que impulsan <br />
          tu marca
        </span>
      </h1>
    </section>
  )
}

export default Hero