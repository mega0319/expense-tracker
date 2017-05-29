import React from 'react'

export default function EachExpense(props){

  let formattedDate = props.xpdata.created_at.slice(0,10)

  let recurring = props.xpdata.recurring === false ? "No" : "Yes"

  let category

  switch (props.xpdata.type_id){
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
  return(
    <tr>

      <td className="t-data"> {props.xpdata.name}</td>

      <td className="t-data"> ${parseFloat(props.xpdata.value).toFixed(2)}</td>

      <td className="t-data"> {category}</td>

      <td className="t-data"> {recurring}</td>

      <td className="t-data"> {formattedDate}</td>

      <td className="t-data"> <button className="btn-danger tbutton" onClick={ () => props.onDelete(props.xpdata.id) }> X </button></td>

      <td className="t-data"> <button className="btn-warning tbutton"> Edit </button></td>

    </tr>
  )
}
