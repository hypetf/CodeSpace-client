import { React } from 'react';
import styles from './UserMenu.module.css';

function UserBadge({ label }) {
    return <span className={`${styles.user_badge} ${label.toLowerCase()}`}>
        {label}
    </span>
}

export default UserBadge;