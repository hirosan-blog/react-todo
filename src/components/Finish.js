import React from 'react'

const Finish = (props) => {
  return (
    <div className="complete-area">
    <p className="title">完了済みのTodo</p>
    <ul>
      {props.completetodo.map((todo,index) => {
        return(
          <div className="list-row" key={index}>
          <li>{todo}</li>
          <button onClick={() => props.RemoveTodo(index)}>戻す</button>
        </div>
        )
      })}
    </ul>
  </div>
  )
}

export default Finish
