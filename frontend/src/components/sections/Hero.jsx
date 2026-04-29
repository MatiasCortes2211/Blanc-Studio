import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gradiente}></div>
      <h1 className={styles.titulo}>
        creamos diseños <br />
        que impulsan <br />
        tu marca
      </h1>
    </section>
  )
}

export default Hero