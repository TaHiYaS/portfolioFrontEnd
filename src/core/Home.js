import React from 'react'
import Layout from '../core/Layout'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
        <Layout title= ""  description= "" className="container" >
        <div className="form-outline mb-5">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="se rch" placeholder="Search" aria-label="Trouer un service"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        <div className="row">
            <div className="card col-md-8" >
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="card-link">Card link</Link>
                        <Link href="#" className="card-link">Another link</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="card-link">Card link</Link>
                        <Link href="#" className="card-link">Another link</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card border-success"  >
                    <div className="card-body ">
                        <h2 className="card-header">Nouveauté </h2>
                        <ul className="list-group list-group-flush">
                        <Link className="nav-link" to="/type/create">La liste</Link>
                        </ul>
                        <Link className="nav-link" to="/type/create">Creer une liste</Link>
                    </div>
                </div>
            </div>
        </div>
  
        
        </Layout>
    </div>
  )
}

export default Home