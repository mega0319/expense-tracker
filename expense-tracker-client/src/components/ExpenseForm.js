import React from 'react'

export default class ExpenseForm extends React.Component {
  constructor(){
    super()

    this.state = {
      input: '',
      select: ''
    }
  }

  handleChange(e){
    this.setState(
      Object.assign({}, this.state, {input: e.target.value})
    )
  }

  handleSelectChange(e){
    this.setState(
    Object.assign({}, this.state, {select: e.target.value})
    )
  }

  handleSubmit(e){
    e.preventDefault()

  }

  render(){
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Add an Expense Below
          </label> <br/>
          <select value={this.state.select} onChange={this.handleSelectChange.bind(this)}>
              <option value='recreation'>Recreation</option>
              <option value='living'>Living</option>
              <option value='food'>Food</option>
              <option value='utilities'>Utilities</option>
              <option value='travel'>Travel</option>
              <option value='education'>Education</option>
              <option value='family'>Family</option>
            </select>
          <input type='text' placeholder='name of expense' value={this.state.input} onChange={this.handleChange.bind(this)}/>
          <input className="btn btn-default" type='submit' />
        </form>
      )


  }
}
