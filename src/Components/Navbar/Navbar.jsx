import { React, useContext, useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/images/Logo.png';
import NavItem from './NavItem';
import UserMenu from './UserMenu/UserMenu';
import { ThemeController } from '../ThemeController/ThemeController';

// ICONS
import home_ico from '../../assets/images/icons/home.svg';
import leaderboard_ico from '../../assets/images/icons/events.svg';
import challenges_ico from '../../assets/images/icons/resNtools.svg';
import faq_ico from '../../assets/images/icons/info.png';
import sun_ico from '../../assets/images/icons/sun.svg';
import moon_ico from '../../assets/images/icons/moon.svg';
// ---

function Navbar() {
    const [themeIco, setThemeIco] = useState(sun_ico);
    const updateTheme = () => {
        let currentTheme = ThemeController.toggleTheme();
        setThemeIco(currentTheme === 'lightMode' ? sun_ico : moon_ico);
    }

    useEffect(() => {
        let currentTheme = ThemeController.getTheme();
        setThemeIco(currentTheme === 'lightMode' ? sun_ico : moon_ico);
    }, []);

    return <div className={styles.Navbar}>
        <a href="/home">
            <img src={Logo} id={styles.navbar_logo} />
        </a>
        <div className={styles.nav_divider}></div>
        <div id={styles.nav_links}>
            <NavItem icon={home_ico} label="Home" linkTo="/" isActive={true} />
            <NavItem icon={challenges_ico} label="Challenges" linkTo="/" />
            <NavItem icon={leaderboard_ico} label="Leaderboard" linkTo="/" />
            <NavItem icon={faq_ico} label="FAQ" linkTo="/" />
        </div>
        <div id={styles.nav_user_controls}>
            <button id={styles.nav_theme_btn} onClick={() => updateTheme()}>
                <img src={themeIco} alt="Theme icon" />
            </button>
            <UserMenu />
        </div>
    </div>
}

export default Navbar;
