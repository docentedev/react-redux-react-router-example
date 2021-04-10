import {
    NavLink,
} from "react-router-dom";
import routes from "../../routes";

import styles from './Menu.module.css'

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        activeClassName={styles.ActiveLink}
                        exact
                        to={routes.HOME}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={styles.ActiveLink}
                        exact
                        to={routes.CONTACT}
                    >Contacto</NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={styles.ActiveLink}
                        to={routes.PRODUCT}
                    >Productos</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
