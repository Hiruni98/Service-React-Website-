 /*import React from 'react';
import '../../App.css';


export default function Login() {
  return <h1 className='login'>Login Page</h1>;
  
  }  */


//----------------------------------------------------------

import React, { Component } from 'react'
import './Login.css'



class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
           


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} Login  Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',

        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Login</h1>
                    <label>First Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name..." /><br />

                    <label>Last Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name..." /><br />

                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                   
                    <input type="submit" value="Login" />
                </form>

            </div>
            
        )
    }
}

export default login;


