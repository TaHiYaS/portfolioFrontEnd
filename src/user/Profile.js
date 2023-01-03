import React, {Fragment} from 'react'
import Layout from '../core/Layout'
import {Link} from "react-router-dom"
import { authenticate } from '../contents/AuthtiRoute'

function Profile() {

  const user = authenticate().user;
  return (
    <Fragment>
    <Layout title= "Profile"  description={`Bonjour ${ user.name },`} className="container" >
    <div className="form-outline mb-5">
        <div className="row">
            <div className="col-md-8">
                <div className="card border-success"  >
                    <div className="card-body ">
                        <h2 className="card-header">compte</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">Nom: {user.name}</li>
                            <li className="list-group-item">Email: {user.email}</li>
                        </ul>
                        <div className="card-footer text-muted">Role: {user.role ? "Admin" : "Utilisateur"}</div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card border-success"  >
                    <div className="card-body ">
                        <h2 className="card-header">Favorite</h2>
                        <ul className="list-group list-group-flush">
                        <Link className="nav-link" to="/type/create">Ma liste</Link>
                        </ul>
                        <Link className="nav-link" to="/type/create">creer une liste</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="form-outline mb-10">
        
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">Historique</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Lorem ipsum dolor sit amet <cite title="Source Title">Integer posuere erat a ante</cite></footer>
                    </blockquote>
                </div>
                </div>
            
        </div>
    </div>    
</Layout>
</Fragment>





  )
}

export default Profile