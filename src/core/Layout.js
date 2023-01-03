import React from 'react'

function Layout({title, description, className, children}) {
  return (
    <div>
        <div className="card mb-3">
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted"></small></p>
            </div>
        </div>
            <div className={className}>
                {children}
        </div>
    </div>
  )
}

export default Layout