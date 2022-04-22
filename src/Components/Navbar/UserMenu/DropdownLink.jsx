import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserMenu.module.css';
import arrowRight from '../../../assets/images/icons/arrow-right.svg';
import axios from 'axios';

function DropdownLink({ icon, label, arrow, linkTo, logout }) {
    let navigate = useNavigate();

    function signout() {
        if (logout === true) {
            axios({
                method: 'GET',
                url: '/api/auth/logout'
            }).then(res => {
                window.location = "http://localhost:3000/";
            }).catch(err => { console.log(err) });
        }
    }

    return <a onClick={signout} className='dropdown-link' href={linkTo}>
        <img src={icon} />
        {label}
        {
            arrow ? <img src={arrowRight} /> : <span></span>
        }
    </a>
}

export default DropdownLink;
