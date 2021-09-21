import React, {useState} from 'react';
import LoginForm from './LoginForm';
import LoginFormSuccess from './LoginFormSuccess';

const Form=()=> {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)
    
    const submitForm=()=>{
        setFormIsSubmitted(true)

    }
    return (
        <div>
            {!formIsSubmitted ? <LoginForm submitForm={submitForm} /> : <LoginFormSuccess />}
        </div>
    );
}

export default Form;