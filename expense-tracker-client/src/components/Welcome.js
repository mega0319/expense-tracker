import React from 'react'

export default function Welcome(){

  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="cover-art">Welcome to e-Ledger!</h1>
        <img className="cover-art" src={require('./Dollar-sign-clipart-5.gif')} alt="" width="200" height="200"/>
        <p>This project is meant for those of us who still
        use check registers and check ledgers to manually track expenses. This tool is to help transition from manually
        writing out entries towards utilizing full online banking platforms.</p>
        <p><a className="btn btn-primary btn-lg" href="/categories" role="button">Get Started</a></p>
    </div>
  </div>
  )
}
