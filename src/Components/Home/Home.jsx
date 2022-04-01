import React, { useContext, useEffect } from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import Statistics from '../Statistics/Statistics';
function Home() {

    return (
        <div className={styles.Home}>
            <Navbar />
            <Statistics />
        </div>
    );
}

export default Home;