import React from 'react'
import ExpenseForm from './ExpenseForm'
import Expenses from './Expenses'
// import { Link, Route } from 'react-router-dom'
import '../App.css';
import Graph from './Graph'

export default class InfoContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      expenses: [],
      expenseCalcs: []
    }
  }

    componentDidMount(){
      fetch("http://localhost:3000/expenses")
      .then( res => res.json() )
      .then( data => this.setState({
        expenses: data
      }) )
      .then( () => this.calculations() )
    }

    calculations(){

        let recExp = this.state.expenses.reduce(function(total, expense){
          if (expense.type_id === 1){
            return parseFloat(expense.value) + total
          }else{
            return 0 + total
          }
        }, 0.0)

        let livExp = this.state.expenses.reduce(function(total, expense){
          if (expense.type_id === 2){
            return parseFloat(expense.value) + total
          }else{
            return 0 + total
          }
        }, 0.0)

        let foodExp = this.state.expenses.reduce(function(total, expense){
          if (expense.type_id === 3){
            return parseFloat(expense.value) + total
          }else{
            return 0 + total
          }
        }, 0.0)

        let utilExp = this.state.expenses.reduce(function(total, expense){
          if (expense.type_id === 4){
            return parseFloat(expense.value) + total
          }else{
            return 0 + total
          }
        }, 0.0)

          let travExp = this.state.expenses.reduce(function(total, expense){
            if (expense.type_id === 5){
              return parseFloat(expense.value) + total
            }else{
              return 0 + total
            }
          }, 0.0)

          let eduExp = this.state.expenses.reduce(function(total, expense){
            if (expense.type_id === 6){
              return parseFloat(expense.value) + total
            }else{
              return 0 + total
            }
          }, 0.0)

          let famExp = this.state.expenses.reduce(function(total, expense){
            if (expense.type_id === 7){
              return parseFloat(expense.value) + total
            }else{
              return 0 + total
            }
          }, 0.0)

          let charExp = this.state.expenses.reduce(function(total, expense){
            if (expense.type_id === 8){
              return parseFloat(expense.value) + total
            }else{
              return 0 + total
            }
          }, 0.0)

          this.setState(
            Object.assign({}, this.state, {expenseCalcs: [recExp, livExp, foodExp, utilExp, travExp, eduExp, famExp, charExp] })
          )
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
      .then( data => this.setState(
        Object.assign({}, this.state, {expenses: data})
      ) )
      .then( () => this.calculations() )
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
      .then( data => this.setState(
        Object.assign({}, this.state, {expenses: data})
      ) )
      .then( () => this.calculations() )
      // this.props.history.push('/categories')
    }


  render(){
    // if (this.state.expenses.length > 0 && this.state.expenseCalcs.length > 0){
      // console.log(this.state.expenseCalcs)
      return (
        <div>
          <div className="expenses">
            <h1>Your Current Expenses</h1>
            {this.state.expenseCalcs.length > 0 ? <Graph expenseData={this.state.expenseCalcs} /> : null}
            <div id="chart-container"></div>
            <Expenses expenses={this.state.expenses} onDelete={this.handleDeleteExpense.bind(this)}/>
          </div>
          <ExpenseForm onCreate={this.handleNewExpense.bind(this)} />
        </div>
      )
    // }else{
    //   return null
    // }

  }
}
