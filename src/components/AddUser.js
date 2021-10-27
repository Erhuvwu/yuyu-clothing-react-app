import React, { Component } from 'react';
import UserService from '../services/UserService';

class AddUser extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           name:'',
           email:'',
           password: ''
        }
      
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);

    }//constructor

     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }


    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }
  
    emailHandler=(event) => {
        this.setState({
             email: event.target.value});
    }

    passwordHandler=(event) => {
        this.setState({
             password: event.target.value});
    }

    saveUser = (e) => {
        e.preventDefault();
        let user={
           id: this.state.id,
           name: this.state.name,
           email: this.state.email,
           password: this.state.password
        };
        console.log(user);
        UserService.createUser(user).then(res =>{
                // this.props.history.push('/users');  
                this.props.history.push('/users');
            }).catch(err=>{
                console.log("record not saved.");
            });
    }//closing save method

    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div className='form-container'>
            <div className='wrapper'>
                <div>
                    <h2 className='form-title'>Create Account</h2>
                </div>
                <form className='form-wrapper'>
                   
                    <div className='form-name'>
                        <label className='label'>User ID</label>
                        <input  className='input' type='text' name='id' value={this.state.id} onChange={this.idHandler}/>
                       
                    </div>
                    <div className='form-name'>
                        <label className='label'>User Name</label>
                        <input  className='input' type='text' name='name' value={this.state.name} onChange={this.nameHandler}/>
                
                    </div>
                    <div className='email'>
                        <label className='label'>User Email</label>
                        <input  className='input' type='email' name='email' value={this.state.email} onChange={this.emailHandler}/>
                     
                    </div>
                    <div className='password'>
                        <label className='label'>User Password</label>
                        <input  className='input' type='password' name='password' value={this.state.password} onChange={this.passwordHandler}/>
                       
                    </div>
                    <div>
                    <button className="btn btn-success" onClick={this.saveUser}> Save </button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button> 
                    </div>
                </form>

            </div>
            
        </div>
        );
    }
}

export default AddUser;