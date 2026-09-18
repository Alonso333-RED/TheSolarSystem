import "./Header.css";
import { useTheme } from "../context/ThemeContext";

function Header() {

    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">

            <div className="logo">
                El Sistema Solar
            </div>

            <nav className="navigation">
                <a href="#inicio">Inicio</a>
                <a href="#planetas">Planetas</a>
                <a href="#sistema">Sistema Solar</a>
                <a href="#explorar">Saber Más</a>
            </nav>

            <button
                className="theme-button"
                onClick={toggleTheme}
                aria-label="Cambiar tema"
            >
                {theme === "dark" ? "☀️" : "🌙"}
            </button>

        </header>
    );
}

export default Header;