import styles from './Servicios.module.css'

function Servicios() {
  return (
    <section className={styles.servicios}>
      <h2 className={styles.subtitulo}>Lo que ofrecemos</h2>
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.cardIzq}`}>
          <h3 className={styles.cardTitulo}>Diseño y Desarrollo web</h3>
          <p className={styles.cardTexto}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className={`${styles.card} ${styles.cardEstrategia}`}>
          <h3 className={styles.cardTitulo}>Estrategia digital</h3>
          <p className={styles.cardTexto}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Presencia digital en redes sociales</h3>
          <p className={styles.cardTexto}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Automatización de mensajes</h3>
          <p className={styles.cardTexto}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={`${styles.card} ${styles.cardPublicidad}`}>
          <h3 className={styles.cardTitulo}>Publicidad digital (Meta Ads)</h3>
          <p className={styles.cardTexto}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </section>
  )
}

export default Servicios