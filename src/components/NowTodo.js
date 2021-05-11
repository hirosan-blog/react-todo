import React from 'react'

const NowTodo = (props) => {
  return (
    <div className="incomplete-area">
    <p className="title">未完了のTodo</p>
    <ul>
      {props.nowtodo.map((todo,index) => {
        return(
          <div className="list-row" key={index}>
          <li>{todo}</li>
          <button onClick={() => props.DoneTodo(index)}>完了</button>
          <button onClick={() => props.DeleteTodo(index)}>削除</button>
        </div>
        )
      })}
    </ul>
  </div>
  )
}

export default NowTodo
