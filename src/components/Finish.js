import React,{useState} from 'react'

const Finish = () => {
  const [todos,setTodos] = useState(["完了した１","完了した２"])
  return (
    <div className="complete-area">
      <p className="title">完了済みのTodo</p>
      <ul>
        {todos.map((todo,index) => {
          return(
            <div className="list-row" key={index}>
            <li>{todo}</li>
            <button>戻す</button>
          </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Finish
