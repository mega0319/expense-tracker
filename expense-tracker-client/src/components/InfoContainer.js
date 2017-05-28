import React from 'react'
import ExpenseForm from './ExpenseForm'
import Expenses from './Expenses'
import { Link, Route } from 'react-router-dom'

export default class InfoContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      expenses: []
    }
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000/categories")
  //   .then( res => res.json() )
  //   .then( data => this.setState({
  //     categories: data
  //   }))
  // }

    componentDidMount(){
      fetch("http://localhost:3000/expenses")
      .then( res => res.json() )
      .then( data => this.setState({
        expenses: data
      }) )
    }
  // handleButton(){
  //   this.setState(
  //     Object.assign({}, this.state, {buttonShow: !this.state.buttonShow})
  //   )
  // }

  render(){
    return (
      <div>
        <div>
          <h1>Your Current Expenses</h1>
          <Expenses expenses={this.state.expenses}/>
        </div>
        <ExpenseForm />
      </div>
    )
  }
}
