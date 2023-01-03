import React, {Fragment} from 'react';
import {withRouter } from 'react-router-dom';
import {authenticate} from './../contents/AuthtiRoute';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Active (history, path){
    return history.location.pathname === path ?  {color :'#FFFFFF	'} : {color :'#000000'}
  }
  
function Menu(props) {
  const sign_out = () => {
    fetch("https://backendportfol.herokuapp.com/users/sign_out")
    .then(() => { toastr.info('prochaine fois',{positionClass: "toast-bottom-center",}) 
    localStorage.removeItem('token_Info')
    props.history.push('/sign_in')
    })
    .catch()
  }
  return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-warning" expand="lg">
            <Container>
                <Navbar.Brand className="navbar-brand"  to="#">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Fragment>
                            <Nav.Link 
                                style = {Active(props.history,'/')}  
                                href="/">Home</Nav.Link>
                            <Nav.Link 
                                style = {Active(props.history,'/profile')}  
                                href={`${authenticate() && authenticate().user.role === 1 ? '/admin' : ''}/profile`}>Profile
                            </Nav.Link>
                        </Fragment>           
                    </Nav>
                    <Nav className="justify-content-end"> 
                        {!authenticate() && (<Fragment>
                        </Fragment>)}
                            {authenticate() && (<Fragment>
                                <Navbar.Collapse 
                                 className="d-flex"  fixed= 'left'>
                                <spam 
                                    style={{ cursor: 'pointer'}}        
                                    onClick={sign_out}>
                                    Sign Out
                                </spam>
                                </Navbar.Collapse>
                        </Fragment>)}
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
export default  withRouter(Menu)