import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (<nav className={styles.Navigation}>
    <NavLink to="">Home</NavLink>
    <NavLink to="Planes">Planes</NavLink>
    <NavLink to="trains">Trains</NavLink>
    <NavLink to="Automobiles">Automobiles</NavLink>
  </nav>);
}
