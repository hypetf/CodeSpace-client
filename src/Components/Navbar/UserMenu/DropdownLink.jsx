import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserMenu.module.css';
import arrowRight from '../../../assets/images/icons/arrow-right.svg';
import axios from 'axios';

function DropdownLink({ icon, label, arrow, linkTo, logout }) {
    let navigate = useNavigate();

    function handleLogoutBtn() {
        if (logout === true) {
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
    }

    return <a onClick={handleLogoutBtn} className={styles.dropdown_link} href={linkTo}>
        <img src={icon} />
        {label}
        {
            arrow ? <img src={arrowRight} /> : <span></span>
        }
    </a>
}

export default DropdownLink;
