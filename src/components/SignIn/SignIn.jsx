import React from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    async onHandleSubmit(e){
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch(error) {
            console.error(error);
        }

        
    }

    onHandleChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){

        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.onHandleSubmit.bind(this)}>
                    <FormInput name="email" type="email" value={email} onHandleChange={this.onHandleChange.bind(this)} label="email" required/>
                    <FormInput name="password" type="password" value={password} onHandleChange={this.onHandleChange.bind(this)} label="password" required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;