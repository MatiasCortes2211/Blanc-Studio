import styles from './Nosotros.module.css'

function Nosotros() {
  return (
    <section className={styles.nosotros}>
      <div>
        <h2 className={styles.titulo}>Sobre<br/>blanc</h2>
      </div>
      <div>
        <p className={styles.texto}>En blanc studio ayudamos a marcas a crecer en el entorno digital a través del diseño, la estrategia y una imagen sólida. Combinamos creatividad, visión comercial y atención al detalle para desarrollar sitios web, presencia visual en redes y campañas que generan impacto real.</p>
      </div>
    </section>
  )
}

export default Nosotros