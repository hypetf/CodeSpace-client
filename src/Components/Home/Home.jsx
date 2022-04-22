import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import '../../assets/css/main.css'
import NotAuthBody from './HomeComponents/NotAuthBody';

function Home() {
    return (
        <div className='Home'>
            <NotAuthBody />
        </div>
    );
}

export default Home;