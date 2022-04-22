import React from 'react';
import styles from './UserMenu.module.css';
import login_ico from '../../../assets/images/icons/login.svg';

function UserMenu() {
    return (
        <a href="/signin" id={styles.nav_btn_login}>
            <img src={login_ico} />
            Sign in
        </a>
    )
}

export default UserMenu;