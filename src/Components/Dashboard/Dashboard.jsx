import React, { useContext } from 'react';
import styles from './Dashboard.module.css';
import { UserContext } from '../../App';

function Dashboard() {
    const { userData, setUserData } = useContext(UserContext);
    return (
        <div className={styles.Dashboard}>
            <div id={styles.welcome}>
                Welcome <h2>{userData.displayName}</h2>
            </div>
        </div>
    );
}

export default Dashboard;