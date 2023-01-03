import React , { useState}  from 'react'
import {Link } from 'react-router-dom'
import toastr from 'toastr';
import "toastr/build/toastr.css";
import{Active} from '../core/Menu';
import picSign from '../images/picSign.jpg'


function Sign_in(props) {
    const [user, setUser] = useState({
        email:'',
        passworrd:''
    })
    const change = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }
    const sendSign_in = (event) =>{
        event.preventDefault();
        fetch("https://backendportfol.herokuapp.com/users/sign_in" ,{
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
                toastr.error(response.erreur,'veirifie...',{positionClass: "toast-bottom-center",}) 
            } else {
                toastr.info('Bienvenue',{positionClass: "toast-top-left",})
                localStorage.setItem('token_Info',JSON.stringify(response))
            props.history.push('/')
            }
        })
        .catch(erreur => toastr.warning(erreur,'Serveur...',{positionClass: "toast-bottom-center",})  )
    }
    const [passwordShow, setPasswordShow] = useState(false);
    const togglePassword = () => {
        setPasswordShow(!passwordShow);
    }

  return (
    <div className="jumbotron">
            <div className= "container  color = #000000">
                <div className="card">
                        <div className="card-body ">
                            <div className="row justify-content-center">
                                <div className="col-md-5 mx-auto">
                                  
                                    <i className="fas fa-user-astronaut fa-4x my-6"  ></i>
                                  
                                    <form  onSubmit={sendSign_in}>
                                    <div col-md-2>
                                      <img src={picSign} className="card-img-top "  style={{width: '40%', height: '60%'}} alt="Card" />
                                    </div>
                                    <h3 className="fw-bold mb-4 pb-2">Connectez-vous</h3>
                                        <div className="form-outline ">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input onChange={change} 
                                                type="email" id="email" 
                                                placeholder="email@example.com"   
                                                className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input onChange={change}  
                                                    type={passwordShow ? "text" : "password"}  id="password" 
                                                    placeholder="Password"  
                                                    className="form-control form-control-lg" />
                                        </div>
                           
                                            <label ><span>Show Password: </span></label>
                                            <input onClick={togglePassword}  
                                                type= "checkbox" 
                                                name = "show-password" 
                                                id="show-password" />
                                   
                                        <div>
                                            <button  className="btn btn-lg btn-primary btn-block-center col-md-12">Sign In</button>
                                            
                                        </div>
                                        <div>
                                            <Link 
                                            style = {Active(props.history,'/sign_up')} 
                                            className="nav-link active text-primary " 
                                            to="/sign_up">Vous n’avez pas de compte ? Inscrivez-vous</Link>

                                        </div>
                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  
            </div>
     
    </div>
  )
}

export default Sign_in