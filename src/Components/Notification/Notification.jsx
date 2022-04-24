import React from 'react';
import styles from './Notification.module.css';

function Notification(type, message) {
    return (
        <div className={styles.Notification}>
            {message}
        </div>
    );
}

export default Notification;