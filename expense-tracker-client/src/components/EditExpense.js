import React from 'react'

export default class EditExpense extends React.Component{
  constructor(){
    super()

    this.state = {
      name: '',
      dollar: '',
      select: '',
      recurring: ''
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

  handleEditSubmit(){
    if (this.state.name && this.state.dollar){
      this.props.onEdit(this.props.xpdata.id, this.state.name, this.state.dollar, this.state.select, this.state.recurring )
    }else{
      this.props.onEdit(this.props.xpdata.id, this.props.xpdata.name, this.props.xpdata.value, this.props.xpdata.type_id, this.props.xpdata.recurring)
    }
    this.props.handleEditButton()
  }

  render(){
    let formattedDate = this.props.xpdata.created_at.slice(0,10)
    return (
      <tr >
        <td className="t-data edit-form"> <input type="text" placeholder={this.props.xpdata.name} onChange={this.nameHandleChange.bind(this)} /> </td>

        <td className="t-data edit-form"> <input type="number" step=".01" placeholder={parseFloat(this.props.xpdata.value).toFixed(2)} onChange={this.dollarHandleChange.bind(this)}/></td>

        <td className="t-data">
          <select value={this.state.select} onChange={this.handleSelectChange.bind(this)}>
            <option value='recreation'>Recreation</option>
            <option value='living'>Living</option>
            <option value='food'>Food</option>
            <option value='utilities'>Utilities</option>
            <option value='travel'>Travel</option>
            <option value='education'>Education</option>
            <option value='family'>Family</option>
            <option value='charity'>Charity</option>
          </select>
        </td>

        <td className="t-data">
          <input type='checkbox'
            value={this.state.recurring}
            onChange={this.boxHandleChange.bind(this)}
          />
        </td>

        <td className="t-data"> {formattedDate}</td>

        <td className="t-data-btn">
          <button className="btn btn-success tbutton animated bounceIn" onClick={ () => this.handleEditSubmit() }><i className="fa fa-paper-plane fa-lg" aria-hidden="true"></i></button>
        </td>

        <td className="t-data-btn">
          <button className="btn btn-warning tbutton animated bounceIn" onClick={this.props.handleEditButton}><i className="fa fa-ban fa-lg" aria-hidden="true"></i></button>
        </td>
      </tr>
    )
  }


}
