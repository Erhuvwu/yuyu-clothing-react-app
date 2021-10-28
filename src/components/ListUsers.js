import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    componentDidMount() {
        console.log("break");
        UserService.getUsers().then((res) => {
            console.log(res.data);
            this.setState({ users: res.data });
        });
    }

    addUser() {
        console.log(this);
        console.log(this.props);
        console.log(this.props.history);
        this.props.history.push('/add-user');
    }

    editUser(id) {
        this.props.history.push(`/update-user/${id}`);

    }

    deleteUser(id) {
        this.props.history.push(`/delete-user/${id}`);
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addUser}> Create User Account</button>

                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        {/* className="table table-striped table-bordered */}
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Password</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>View</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <button onClick={() => this.editUser(user.id)} className="btn waves-effect waves-light">
                                                    <i className="material-icons">edit</i>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => this.deleteUser(user.id)} className="btn waves-effect waves-light">
                                                    <i className="material-icons">delete</i>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => this.viewUser(user.id)} className="btn waves-effect waves-light">
                                                    <i className="material-icons">view_list</i>
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListUsers;