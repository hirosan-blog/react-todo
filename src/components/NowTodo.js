import React,{useState} from 'react'

const NowTodo = () => {
  const [todos,setTodos] = useState(["1のタスク","2のタスク"])

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {todos.map((todo,index) => {
          return(
          <div className="list-row" key={index}>
          <li>{todo}</li>
          <button>完了</button>
          <button>削除</button>
        </div>
          )
        })}
      </ul>
    </div>
  )
}

export default NowTodo
