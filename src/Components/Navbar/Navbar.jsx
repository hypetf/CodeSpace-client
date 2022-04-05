import React, { useContext, useEffect } from 'react';
import styles from './Navbar.module.css';
import { ThemeContext } from '../../App';

function Navbar() {
    const { theme, themeToggle } = useContext(ThemeContext);
    return (
        <div className={`${styles.Navbar} ${theme}_theme_img`}>
            <button
                className={styles.btn_themeToggle}
                onClick={() => themeToggle()}
            >Switch theme pasdpoiapodsa
            </button>
        </div>
    );
}

export default Navbar;