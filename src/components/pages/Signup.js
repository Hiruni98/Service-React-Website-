/*import React from 'react';
import '../../App.css';

export default function SignUp() {
  return <h1 className='sign-up'>Sign Up Page</h1>;
}   */


//----------------------------------------------------------------------------



import React, { Component } from 'react'
//import './CSS/todo.css'
import './Signup.css';



class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            service:"",//
            email:"",  //
            contactNumber:"", //
            district:"",//
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

    lasthandler = (event) => {
      this.setState({
        gender: event.target.value
      })
  }

  
  lasthandler = (event) => {
    this.setState({
      service: event.target.value
    })
}

  lasthandler = (event) => {
    this.setState({
        email: event.target.value
    })
}

    passwordhandler = (event) => {
        this.setState({
          contactNumber: event.target.value
        })
    }

    passwordhandler = (event) => {
      this.setState({
        district: event.target.value
      })
  }

    genderhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",    
            gender: "",
            service:"",//
            email:"",  //
            contactNumber:"", //
            district:"",//
            password: '',
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>First Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name" /><br />

                    <label>Last Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name" /><br />

                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.lasthandler} placeholder="Email" /><br />

                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />

                    <label>Service :</label><select onChange={this.servicehandler} defaultValue="Select Your Service">
                        <option defaultValue>Select Service</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="interior-painting">Interior Painting</option>
                        <option value="electrician">Electrician</option>
                        <option value="carpenting">Carpenting</option>
                        <option value="eldery-care">Elderly Care</option>
                        <option value="nursing">Nursing</option>
                        <option value="ac-technicianing">AC Technicianing</option>
                        <option value="grass-cutting">Grass Cutting</option>
                        <option value="delivery-man">Delivery Man</option>
                        <option value="house-cleaning">House Cleaning</option>
                        <option value="security-service">Securtiy Service</option>     
                    </select><br />

                    <label>Contact Number  :</label> <input type="text" value={this.state.contactNumber} onChange={this.lasthandler} placeholder="Contact Number" /><br />
                    
                    
                    <label>District :</label><select onChange={this.districthandler} defaultValue="Select Your District">
                        <option defaultValue>Select District</option>
                        <option value="colombo">Colombo</option>
                        <option value="gampaha">Gampaha</option>
                        <option value="kaluthara">kaluthara</option>
                        <option value="mannar">Mannar</option>
                        <option value="colombo">Colombo</option>
                        <option value="gampaha">Gampaha</option>
                        <option value="ampara">Ampara</option>
                        <option value="anuradhapura">Anuradhapura</option>
                        <option value="kandy">kandy</option>
                        <option value="jaffna">Jaffna</option>
                        <option value="kegalle">kegalle</option>
                        <option value="killinochchi">Kilinochchi</option>
                        <option value="kurunegala">kurunegala</option>
                        <option value="matale">Matale</option>
                        <option value="mathara">Mathara</option>
                        <option value="monaragala">Monaragala</option>
                        <option value="mulativu">Mulativu</option>
                        <option value="nuwara eliya">Nuwara Eliya</option>
                        <option value="pollonaruwa">Pollonaruwa</option>
                        <option value="puttalam">Puttalam</option>
                        <option value="raethnapura">Rathnapura</option>
                        <option value="vavuniya">Vavuniya</option>
                    </select><br />
                    
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />

                    <input type="submit" value="Create Account" />
                </form>

            </div>
            
        )
    }
}

export default Signup;

