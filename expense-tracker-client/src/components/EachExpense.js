import React from 'react'

export default function EachExpense(props){

  return(
    <tr>

      <td> {props.xpdata.name}</td>

      <td> ${parseFloat(props.xpdata.value).toFixed(2)}</td>

      <td className="t-data"> {props.xpdata.type_id}</td>

      <td> {props.xpdata.recurring}</td>

      <td> {props.xpdata.created_at}</td>

      <td> <button className="btn-danger tbutton" onClick={ () => props.onDelete(props.xpdata.id) }> X </button></td>

      <td> <button className="btn-warning tbutton"> Edit </button></td>

    </tr>
  )
}
