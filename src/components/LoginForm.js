import React, {useState, useEffect} from 'react';
import Validation from './Validation';

const LoginForm=({submitForm})=> {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleFormSubmit=(event)=>{
        event.preventDefault()
        setErrors(Validation(values))
        setDataIsCorrect(true)
    }
    useEffect (()=>{
        //if no error and data is correct
        if(Object.keys(errors).length === 0 && dataIsCorrect){
           submitForm(true);
        } 
      }, [errors])

    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    
    return (
        <div className='form-container'>
            <div className='wrapper'>
                <div>
                    <h2 className='form-title'>Create Account</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='form-name'>
                        <label className='label'>Full Name</label>
                        <input  className='input' type='text' name='fullname' value={values.fullname} onChange={handleChange}/>
                         {errors.fullname && <p className='errors'>{errors.fullname}</p>}
                    </div>
                    <div className='email'>
                        <label className='label'>Email</label>
                        <input  className='input' type='email' name='email' value={values.email} onChange={handleChange}/>
                        {errors.email && <p className='errors'>{errors.email}</p>}
                    </div>
                    <div className='password'>
                        <label className='label'>Password</label>
                        <input  className='input' type='password' name='password' value={values.password} onChange={handleChange}/>
                        {errors.password && <p className='errors'>{errors.password}</p>}
                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit}>Sign up</button>
                    </div>

                </form>

            </div>
            
        </div>
    );
}

export default LoginForm;