import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

  render(){
    return (
      <nav className={`navbar navbar-default`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand'>
           e-Ledger
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to='/categories'>Track Expenses</Link></li>
            <li><Link to='/about'>About Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
