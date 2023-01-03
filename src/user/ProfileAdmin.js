import React, { Fragment}  from 'react'
import Layout from '../core/Layout'
import { authenticate } from '../contents/AuthtiRoute'
import {Link} from "react-router-dom"

function ProfileAdmin() {
    const user = authenticate().user;
  return (
            <Fragment>
            <Layout title= "Profile"  description={`${ user.name }`} className="container" >
                <div className="row">
                    <div className="col-md-8">
                        <div className="card border-success"  >
                            <div className="card-body ">
                                <h2 className="card-header">compte</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Nom: {user.name}</li>
                                    <li className="list-group-item">Email: {user.email}</li>
                                </ul>
                                <div className="card-footer text-muted">Role: {user.role ? "admin" : "Utilisateur"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card bg-light mb-3" >
                        <div className="card-header">Coach</div>
                            <div className="card-body">
                                <h5 className="card-title">Info </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link className="nav-link" to="/type/create">Créer un service</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
  )
}

export default ProfileAdmin