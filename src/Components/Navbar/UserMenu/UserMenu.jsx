import { React, useContext, useEffect, useState } from 'react';
import styles from './UserMenu.module.css';
import login_ico from '../../../assets/images/icons/login.svg';
import UserBadge from './UserBadge';
import DropdownLink from './DropdownLink';
// import { motion, AnimatePresence } from 'framer-motion';
import { UserContext } from '../../../App';

// ICONS
import profile from '../../../assets/images/icons/profile.svg';
import settings from '../../../assets/images/icons/settings.svg';
import logout from '../../../assets/images/icons/logout.svg';
import adminPanel from '../../../assets/images/icons/admin-panel.svg';
// ---

function UserMenu() {
    const [isAuth, setIsAuth] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userData, setUserData] = useState({});


    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    if (isAuth === false) {
        return <a href="/signin" id={styles.nav_btn_login}>
            <img src={login_ico} />
            Sign in
        </a>
    }
    else return (
        <div className='UserMenu'>
            {userData && (
                <button
                    className={styles.btn_user_control}
                    onClick={toggleMenu}
                >
                    <img alt="avatar" id={styles.avatar} src={userData.avatar} />
                </button>
            )}
            {isMenuOpen ?
                <div id={styles.user_control_dropdown}>
                    <div id={styles.dropdown_info}>
                        <h3>{userData.username}#{userData.discriminator}</h3>
                        <p>uid: {userData.uid}</p>
                        <div id={styles.dropdown_info_badges}>
                            {userData.badges.slice(0, 3).map((badge, key) => (
                                <UserBadge key={key} label={badge.toUpperCase()} />
                            ))}
                        </div>
                    </div>
                    {
                        isAdmin ?
                            <DropdownLink
                                icon={adminPanel}
                                label="Admin Panel"
                                arrow={true}
                                linkTo="/admin-panel"
                            />
                            : null
                    }

                    <DropdownLink
                        icon={profile}
                        label="Dashboard"
                        arrow={true}
                        linkTo="/dashboard"
                    />
                    <DropdownLink
                        icon={settings}
                        label="Settings"
                        arrow={true}
                        linkTo="#"
                    />
                    <DropdownLink
                        icon={logout}
                        label="Sign out"
                        logout={true}
                    />

                </div>
                : null
            }
        </div>
    );
}

export default UserMenu;

// <button
//     className='btn-user-control'
//     onClick={toggleMenu}
// >
//     <img alt="avatar" id="avatar" src={userData.avatar} />
//     {isMenuOpen ?
//         <div className="user-control-dropdown">
//             <h3>{userData.username}#{userData.discriminator}</h3>
//             <p>uid: {userData.uid}</p>
//             <div id="dropdown-info-badges">
//                 {userData.badges.slice(0, 3).map((badge, key) => (
//                     <UserBadge key={key} label={badge.toUpperCase()} />
//                 ))}
//             </div>
//         </div>
//         : null
//     }
// </button>