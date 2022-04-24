import React, { useContext, useEffect } from 'react';
import styles from './UserMenu.module.css';
import login_ico from '../../../assets/images/icons/login.svg';
import { UserContext } from '../../../App';
import axios from 'axios';

function UserMenu() {
    const { userData, setUserData } = useContext(UserContext);
    const handleLogoutBtn = () => {
        axios({
            method: 'GET',
            url: '/api/v1/user/logout'
        })
            .then(res => {
                console.log(res);
                window.location.href = '/home';

            })
            .catch(err => {
                err = new Error('Error logging out');
                console.warn(err);
            })
    }

    if (!userData)
        return <a href="/signin" id={styles.nav_btn_login}>
            <img src={login_ico} />
            Sign in
        </a>
    else
        return <button id={styles.nav_btn_login} onClick={handleLogoutBtn}>
            <img src={login_ico} />
            Sign out
        </button>
}

export default UserMenu;