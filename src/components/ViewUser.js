import React, { Component } from 'react';
import UserService from '../services/UserService';

class ViewUser extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 user:{}

             }
    }//constructor

     componentDidMount()
     {
        UserService.getUserById(this.state.id).then((res) =>{
            this.setState({user:res.data})
         });
     }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View User Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>User ID: </label>
                                    <input placeholder={this.state.user.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>User Name: </label>
                                      <input placeholder={this.state.user.name} readOnly={true} name="name" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>User Email: </label>
                                      <input placeholder={this.state.user.email} readOnly={true} name="email" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>User Password: </label>
                                      <input placeholder={this.state.user.password} readOnly={true} name="password" className="form-control" />
                                   </div> 
                                                                     
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewUser;