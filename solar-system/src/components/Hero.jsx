import { useState } from 'react'
import './Hero.css'

function Hero() {

const heroPool = [
    {
        name: 'Mercurio',
        image: 'mercury.png',
        color: '#A9A9A9'
    },
    {
        name: 'Venus',
        image: 'venus.png',
        color: '#E6B85C'
    },
    {
        name: 'Tierra',
        image: 'earth.png',
        color: '#4D8CFF'
    },
    {
        name: 'Marte',
        image: 'mars.png',
        color: '#E05A47'
    },
    {
        name: 'Júpiter',
        image: 'jupiter.png',
        color: '#D69B6B'
    },
    {
        name: 'Saturno',
        image: 'saturn.png',
        color: '#D8B878'
    },
    {
        name: 'Urano',
        image: 'uranus.png',
        color: '#66D9E8'
    },
    {
        name: 'Neptuno',
        image: 'neptune.png',
        color: '#4169E1'
    },
    {
        name: 'Todos los Planetas',
        image: 'solarsystem.png',
        color: '#C77DFF'
    }
]

const [planet] = useState(
    heroPool[Math.floor(Math.random() * heroPool.length)]
)

return (
    <section id="inicio" className="hero">

        <div className="hero-content">

            <h1>El Sistema Solar</h1>

            <p>
                Explora nuestro vecindario cósmico
                y descubre los mundos que lo forman.
            </p>

            <a href="#planetas" className="hero-button">
                Explorar planetas
            </a>

        </div>

        <div className="hero-planet" style={{ "--planet-color": planet.color }}>

            <img
                src={"hero/"+planet.image}
                alt={planet.name}
            />

            <span>{planet.name}</span>

        </div>

    </section>
)

}

export default Hero
