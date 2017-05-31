import React from 'react'
import EditExpense from './EditExpense'

export default class EachExpense extends React.Component{
  constructor(){
    super()

    this.state = {
      editMode: false
    }
  }

  handleEditButton(){
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render(){
    let formattedDate = this.props.xpdata.created_at.slice(0,10)

    let recurring = this.props.xpdata.recurring === false ? "No" : "Yes"

    let category

    switch (this.props.xpdata.type_id){
      case 1:
        category = 'Recreation'
        break;
      case 2:
        category = 'Living'
        break;
      case 3:
        category = 'Food'
        break;
      case 4:
        category = 'Utilities'
        break;
      case 5:
        category = 'Travel'
        break;
      case 6:
        category = 'Education'
        break;
      case 7:
        category = 'Family'
        break;
      case 8:
        category = 'Charity'
        break;
      default:
        category = 'Misc'
        break;
      }
    if (this.state.editMode){
      return (
          <EditExpense xpdata={this.props.xpdata} handleEditButton={this.handleEditButton.bind(this)} onEdit={this.props.onEdit}/>
      )
    }else{
      return(
        <tr className="animated slideInLeft">

          <td className="t-data"> {this.props.xpdata.name}</td>

          <td className="t-data"> ${parseFloat(this.props.xpdata.value).toFixed(2)}</td>

          <td className="t-data"> {category}</td>

          <td className="t-data"> {recurring}</td>

          <td className="t-data"> {formattedDate}</td>

          <td className="t-data-btn" > <button className="btn btn-danger tbutton animated bounceIn" onClick={ () => this.props.onDelete(this.props.xpdata.id) }><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></button></td>

          <td className="t-data-btn" > <button className="btn btn-warning tbutton animated bounceIn" onClick={ () => this.handleEditButton()}><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></button></td>

        </tr>
      )
    }
  }
}
