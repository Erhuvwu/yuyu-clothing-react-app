import React, { Component } from 'react';
import UserService from '../services/UserService';

class DeleteUser extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 email:'',
                 password: ''
             }
     
        
        this.deleteUser = this.deleteUser.bind(this);

    }//constructor

     componentDidMount()
     {
        UserService.getUserById(this.state.id).then((res) =>{
          let user = res.data;
          this.setState({name:user.name,
                  email:user.email,
                  password:user.password
                });
        });
           
     }
     
  deleteUser = (e) => {
        e.preventDefault();
        let user={
           id: this.state.id,
           name: this.state.name,
           email: this.state.email,
           password: this.state.password,
        };

        console.log(user);
        UserService.deleteUser(this.state.id).then(res => {
            
            this.props.history.push('/users');
        })
    }

    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>USER ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>User Name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>User Email: </label>
                                      <input placeholder="email" readOnly="true" name="email" className="form-control"
                                         value={this.state.email} onChange={this.emailHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>User Password: </label>
                                      <input placeholder="password" readOnly="true" name="password" className="form-control"
                                         value={this.state.password} onChange={this.passwordHandler} />
                                   </div>  
                                    <button className="btn btn-success" onClick={this.deleteUser}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteUser;