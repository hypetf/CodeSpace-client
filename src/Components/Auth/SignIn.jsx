import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './SignIn.module.css';
import axios from 'axios';

// Icons
import arrowR_ico from '../../assets/images/icons/arrow-narrow-right.svg';
import google_ico from '../../assets/images/icons/google_ico.svg';
import googleColored_ico from '../../assets/images/icons/google-colored.svg';
import github_ico from '../../assets/images/icons/github_ico.svg';
import eyeoff_ico from '../../assets/images/icons/eye-off.svg';
import eyeon_ico from '../../assets/images/icons/eye-on.svg';
import circle_ico from '../../assets/images/icons/circle.svg';

function SignIn() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleGoogleLogin = () => {
        window.open(`${import.meta.env.VITE_API_DOMAIN_v1}/auth/google`, '_self');
    }
    const handleGithubLogin = () => {
        window.open(`${import.meta.env.VITE_API_DOMAIN_v1}/auth/github`, '_self');
    }

    return (
        <div className={styles.SignIn}>
            <h1>Login to Your Account</h1>
            <h2>Start learning by signing into the biggest coding community ever.</h2>
            <div id={styles.loginBox}>
                <div id={styles.EmailLogin}>
                    <div id={styles.EmailInput}>
                        <input
                            type="text"
                            placeholder="Email or Username"
                            onFocus={() => { this }}
                        />
                        <img src={circle_ico} alt="eye-off" />
                    </div>
                    <div id={styles.PasswordInput}>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Password"
                        />
                        <img src={isPasswordVisible ? eyeon_ico : eyeoff_ico} alt="eye-off" onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} />
                    </div>
                    <button id={styles.LoginBtn}>
                        Login to Your Account
                        <img src={arrowR_ico} />
                    </button>
                </div>
                <p id={styles.divider}>/</p>
                <div id={styles.oAuthLogin}>
                    <button
                        id={styles.GoogleLogin}
                        onClick={handleGoogleLogin}
                    >
                        <img src={googleColored_ico} />
                        Sign in with Google
                    </button>
                    <button
                        id={styles.GithubLogin}
                        onClick={handleGithubLogin}
                    >
                        <img src={github_ico} />
                        Sign in with GitHub
                    </button>
                </div>
            </div>
            <a id={styles.forgotPwd}>Forgot your password?</a>
        </div>
    );
}

export default SignIn;