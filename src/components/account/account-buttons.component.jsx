import React from 'react';
import './account-buttons.styles.css';

const AccountButtons = () => {
    return (
        <div className="account-buttons">
            <a className="log_in" href="https://app.myraindrop.co.uk/login">
                Login
            </a>
            <a className="sign_up" href="https://app.myraindrop.co.uk/sign-up">
                Sign up
            </a>
        </div>
    )
}

export default AccountButtons