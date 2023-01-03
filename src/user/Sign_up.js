
import React, { useState} from 'react';
import {Link } from 'react-router-dom'
import toastr from 'toastr'
import "toastr/build/toastr.css"
import{Active} from '../core/Menu';
import picSign from '../images/picSign.jpg'

function Sign_up (props) {
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:''
  })
const handleChange = event =>{
  setUser({...user, [event.target.id]: event.target.value})

}
const sendSignup = event =>{
  event.preventDefault();
    fetch("https://backendportfol.herokuapp.com/users/sign_up",{
      method:"POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
      if(response.erreur) { 
          toastr.warning(response.erreur,'veirifie...',{positionClass: "toast-bottom-center",}) 
      } else {
          toastr.info('Votre compte creer avec succes',{positionClass: "toast-top-full-width",})
      props.history.push('/sign_in')
      }
    })
    .catch(erreur => toastr.warning(erreur,'Serveur...',{positionClass: "toast-bottom-center",}) )
  }
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
      setPasswordShow(!passwordShow);
  }

  return (
    <div>
                  <div className="card">
                      <div className="card-body ">
                          <div className="row justify-content-center">
                              <div className="col-md-5 mx-auto">
                              <i className="fas fa-user-astronaut fa-4x my-6"  ></i>       
                                  <form onSubmit={sendSignup} >
                                    <div col-md-2>
                                      <img src={picSign} className="card-img-top "  style={{width: '40%', height: '60%'}} alt="Card" />
                                    </div>
                                      <div className="form-outline"> 
                                      <h3 className="fw-bold mb-4 pb-2">Inscrivez-vous</h3>
                                          <label htmlFor="name" className="form-label">name</label>
                                          <input onChange={handleChange}  
                                                type="text" 
                                                placeholder="name"  
                                                className="form-control"  
                                                id="name" />
                                      </div>
                                      <div className="form-outline ">
                                          <label className="form-label" htmlFor="email">Email</label>
                                          <input onChange={handleChange}  
                                                  type="email" 
                                                  id="email"
                                                  placeholder="email@example.com" 
                                                  className="form-control form-control-lg" />
                                      </div>
                                      <div className="form-outline mb-2">
                                          <label className="form-label" htmlFor="password">Password</label>
                                          <input onChange={handleChange}  
                                                  type={passwordShow ? "text" : "password"} id="password" 
                                                  placeholder="Password" 
                                                  className="form-control form-control-lg" />
                                      </div>
                                           
                                      <label ><span>Show Password: </span></label>
                                            <input onClick={togglePassword}  
                                                type= "checkbox" 
                                                name = "show-password" 
                                                id="show-password" />                                 
                                      <div>
                                          <button  className="btn btn-info btn-block mb-6 col-md-12">Sign In</button>
                                      </div>
                                      <div className="nav-item">
                                          <Link 
                                          style = {Active(props.history,'/sign_in')} 
                                          className="nav-link  text-primary " to="/sign_in">Vous avez un compte ? Connectez-vous</Link>
                      
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div> 
    </div>
  )
}

export default Sign_up