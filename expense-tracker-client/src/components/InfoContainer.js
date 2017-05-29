import React from 'react'
import ExpenseForm from './ExpenseForm'
import Expenses from './Expenses'
// import { Link, Route } from 'react-router-dom'
import '../App.css';

export default class InfoContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      expenses: []
    }
  }

    componentDidMount(){
      fetch("http://localhost:3000/expenses")
      .then( res => res.json() )
      .then( data => this.setState({
        expenses: data
      }) )
    }

    handleNewExpense(name, value, type, recurring){
      let dollarValue = parseFloat(value).toFixed(2)
      console.log(dollarValue)
      let typeID
      switch (type){
        case 'recreation':
          typeID = 1
          break;
        case 'living':
          typeID = 2
          break;
        case 'food':
          typeID = 3
          break;
        case 'utilities':
          typeID = 4
          break;
        case 'travel':
          typeID = 5
          break;
        case 'education':
          typeID = 6
          break;
        case 'family':
          typeID = 7
          break;
        case 'charity':
          typeID = 8
          break;
        default:
          typeID = 1
          break;
      }

      return fetch("http://localhost:3000/expenses",{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify( {expense: {name: name, value: dollarValue, type_id: typeID, recurring: recurring} } )
      })
      .then( res => res.json() )
      .then( data => this.setState({
        expenses: data
      }) )
    }

    handleDeleteExpense(expenseID){
      return fetch(`http://localhost:3000/expenses/${expenseID}`,{
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        method: "DELETE"
      })
      .then( res => res.json() )
      .then( data => this.setState({
        expenses: data
      }) )
      // this.props.history.push('/categories')
    }


  render(){
    return (
      <div>
        <div className="expenses">
          <h1>Your Current Expenses</h1>
          <Expenses expenses={this.state.expenses} onDelete={this.handleDeleteExpense.bind(this)}/>
        </div>
        <ExpenseForm onCreate={this.handleNewExpense.bind(this)} />
      </div>
    )
  }
}
