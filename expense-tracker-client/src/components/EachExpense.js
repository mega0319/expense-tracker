import React from 'react'

export default function EachExpense(props){

  return(
    <div>
      <p>{props.xpdata.name}</p>
      <p>{props.xpdata.value}</p>
      <p>{props.xpdata.type_id}</p>
      <p>{props.xpdata.recurring}</p>
    </div>
  )
}
