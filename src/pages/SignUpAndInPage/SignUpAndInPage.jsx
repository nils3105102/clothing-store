import React from 'react';
import './SignUpAndInPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignUpAndInPage = () => {
    return (
        <div className="sign-up-and-in-page">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignUpAndInPage;