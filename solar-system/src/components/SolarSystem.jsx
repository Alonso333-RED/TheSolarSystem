import './SolarSystem.css'

function SolarSystem() {
    return (
        <section id="sistema" className='solar-system'>
            <h1>Breve Historia</h1>
            <p>Hace aproximadamente 4.600 millones de años, el Sistema Solar comenzó a formarse a partir de una enorme nube de gas y polvo en el espacio. La gravedad hizo que esta nube colapsara, concentrando la mayor parte de su material en el centro, donde nació el Sol.

Alrededor del joven Sol quedó un disco de material que comenzó a agruparse. Con el tiempo, estos fragmentos formaron los planetas, lunas, asteroides y otros cuerpos celestes que conocemos actualmente.

Los planetas más cercanos al Sol, como Mercurio, Venus, la Tierra y Marte, son rocosos, mientras que los más alejados, como Júpiter, Saturno, Urano y Neptuno, son gigantes gaseosos o helados.

Durante miles de millones de años, el Sistema Solar continuó evolucionando hasta adquirir su estructura actual. Y aunque conocemos mucho sobre él, todavía existen numerosos misterios por descubrir.</p>
            <img src="/solarstory/SolarSystemUnscaled.png" alt="Sistema Solar" className="solar-system-image"/>
        </section>
    );
}

export default SolarSystem;