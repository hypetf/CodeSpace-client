import React, { useContext, useEffect, useState } from 'react';
import styles from './UserMenu.module.css';
import { UserContext } from '../../../App';
import DropdownLink from './DropdownLink';

// Icons
import login_ico from '../../../assets/images/icons/login.svg';
import profile_ico from '../../../assets/images/icons/profile.svg';
import settings_ico from '../../../assets/images/icons/settings.svg';
import logout_ico from '../../../assets/images/icons/logout.svg';

function UserMenu() {
    const { userData } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }



    if (!userData) return (
        <a href="/signin" id={styles.nav_btn_login}>
            <img src={login_ico} />
            Sign in
        </a>
    )
    else return (
        <div className={styles.UserMenu}>
            {userData && (
                <button
                    className={styles.btn_user_control}
                    onClick={toggleMenu}
                >
                    <img alt="avatar" id={styles.avatar} src={userData._json.avatar_url} />
                </button>
            )}
            {
                isMenuOpen ?
                    <div id={styles.user_control_dropdown}>
                        <div id={styles.dropdown_info}>
                            <h3>{userData.username}</h3>
                        </div>
                        <DropdownLink
                            icon={profile_ico}
                            label="Dashboard"
                            arrow={true}
                            linkTo="/dashboard"
                        />
                        <DropdownLink
                            icon={settings_ico}
                            label="Settings"
                            arrow={true}
                            linkTo="#"
                        />
                        <DropdownLink
                            icon={logout_ico}
                            label="Sign out"
                            logout={true}
                        />

                    </div>
                    : null
            }
        </div>
    )
}

export default UserMenu;