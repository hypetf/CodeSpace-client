import { React } from 'react';
import styles from './NavItem.module.css';
import { ThemeController } from '../ThemeController/ThemeController';

function NavItem({ icon, label, linkTo, isActive, themeBtn }) {
    return <a href={linkTo} className={`${styles.NavItem} ${isActive ? `${styles.active}` : ""}`}>
        <img
            src={icon}
            id={label ? '' : styles.noMargin}
            onClick={themeBtn ? () => ThemeController.toggleTheme() : null}
        />
        {label}
    </a>
}

export default NavItem;
