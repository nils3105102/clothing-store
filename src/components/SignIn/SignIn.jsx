import React from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    onHandleSubmit(e){
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
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
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;