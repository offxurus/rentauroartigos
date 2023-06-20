import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/Rentauroatualizado.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="Rentauroatualizado"/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                <Link to="/login">Login</Link>
                </li>
                <li className={styles.item}>
                <Link to="/lancamentos">Lançamentos</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar