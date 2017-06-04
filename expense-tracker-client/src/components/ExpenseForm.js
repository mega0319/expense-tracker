import React from 'react'

export default class ExpenseForm extends React.Component {
  constructor(){
    super()

    this.state = {
      name: '',
      dollar: '',
      select: 'Recreation',
      recurring:false,
      deposit: false
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

  recurringHandleChange(e){
    this.setState(
      Object.assign({}, this.state, {recurring: !this.state.recurring})
    )
  }

  depositHandleChange(e){
    this.setState(
      Object.assign({}, this.state, {deposit: !this.state.deposit})
    )
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onCreate(this.state.name, this.state.dollar, this.state.select, this.state.recurring, this.state.deposit )
    this.setState({
      name: '',
      dollar: '',
      select: 'Recreation',
      recurring:false,
      deposit: false
    })
  }

  render(){
      return (
        <form className="form-inline full-form animated slideInRight" onSubmit={ (e) => this.handleSubmit(e)}>
          <input className="form-control input-lg" size="25" type='text' placeholder='Name of Expense' value={this.state.name} onChange={this.nameHandleChange.bind(this)}/>
          <input className="form-control input-lg" type='number' placeholder='Dollar Amount' step=".01" value={this.state.dollars} onChange={this.dollarHandleChange.bind(this)}/>
          <select className="form form-control" value={this.state.select} onChange={this.handleSelectChange.bind(this)}>
              <option defaultValue='recreation'>Recreation</option>
              <option value='living'>Living</option>
              <option value='food'>Food</option>
              <option value='utilities'>Utilities</option>
              <option value='travel'>Travel</option>
              <option value='education'>Education</option>
              <option value='family'>Family</option>
              <option value='charity'>Charity</option>
            </select>
            <label className="add-xp">Recurring</label>
            <input className="form" type='checkbox' checked={this.state.recurring} onChange={this.recurringHandleChange.bind(this)} />

            <label className="add-xp">Deposit</label>
            <input className="form" type='checkbox' checked={this.state.deposit} onChange={this.depositHandleChange.bind(this)} />

          <input className="btn btn-success add-xp" type='submit' value='+' />
        </form>
      )


  }
}
