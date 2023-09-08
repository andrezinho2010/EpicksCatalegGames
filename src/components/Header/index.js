/* eslint-disable react/react-in-jsx-scope */
import styles from "./Header.module.css"

function Header() {
    return (
      <header className={styles.header}>
        <span>Epicks Cataleg Game</span>
        <nav>
             <a href="#">Home</a>
             <a href="#">Assistir</a>
        </nav>
      </header>
    )
  }
  
export default Header;
