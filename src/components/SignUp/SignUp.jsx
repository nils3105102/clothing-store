import React from 'react';
import './SignUp'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }   

    onHandleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.error(error);
        }

    }

    onHandleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.onHandleSubmit}>
                    <FormInput type="text" name="diplayName" value={displayName} onChange={this.onHandleChange} label="Display Name" required />
                    <FormInput type="email" name="email" value={email} onChange={this.onHandleChange} label="Email" required />
                    <FormInput type="password" name="password" value={password} onChange={this.onHandleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.onHandleChange} label="Confirm Password" required />
                    <CustomButton type="submit">SIGN UP</CustomButton> 
                </form>
            </div>
        );
    }
}

export default SignUp;