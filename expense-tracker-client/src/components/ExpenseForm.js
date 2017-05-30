import React from 'react'

export default class ExpenseForm extends React.Component {
  constructor(){
    super()

    this.state = {
      name: '',
      dollar: '',
      select: '',
      recurring:false
    }
  }

  nameHandleChange(e){
    this.setState(
      Object.assign({}, this.state, {name: e.target.value})
    )
  }

  dollarHandleChange(e){
    this.setState(
      Object.assign({}, this.state, {dollar: e.target.value})
    )
  }

  handleSelectChange(e){
    this.setState(
      Object.assign({}, this.state, {select: e.target.value})
    )
  }

  boxHandleChange(e){
    this.setState(
      Object.assign({}, this.state, {recurring: !this.state.recurring})
    )
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onCreate(this.state.name, this.state.dollar, this.state.select, this.state.recurring )
  }

  render(){
      return (
        <form className="form-inline full-form" onSubmit={ (e) => this.handleSubmit(e)}>
          <label>
            Add an Expense Below
          </label> <br/>


          <input className="form" type='text' placeholder='name of expense' value={this.state.name} onChange={this.nameHandleChange.bind(this)}/>
          <input className="form" type='number' placeholder='dollar amount' value={this.state.dollars} onChange={this.dollarHandleChange.bind(this)}/>
          <select className="form" value={this.state.select} onChange={this.handleSelectChange.bind(this)}>
              <option value='recreation'>Recreation</option>
              <option value='living'>Living</option>
              <option value='food'>Food</option>
              <option value='utilities'>Utilities</option>
              <option value='travel'>Travel</option>
              <option value='education'>Education</option>
              <option value='family'>Family</option>
              <option value='charity'>Charity</option>
            </select>
            <label>Recurring</label>
            <input className="form" type='checkbox' value={this.state.recurring} onChange={this.boxHandleChange.bind(this)} />
          <input className="btn btn-success" type='submit' value='Add Expense' />
        </form>
      )


  }
}
