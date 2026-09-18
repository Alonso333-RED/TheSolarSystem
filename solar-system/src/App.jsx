import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import SolarSystem from './components/SolarSystem.jsx'

function App() {
    return (
        <>
            <Header id="header" />

            <main id="main">
                <Hero />
                <SolarSystem />
            </main>

            <Footer id="footer" />
        </>
    )
}

export default App