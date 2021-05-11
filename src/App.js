
import './style.css';
import React,{useState} from 'react'

function App() {

  const [text,setText] = useState("")
  const [nowtodo,setNowTodo] = useState([])
  const [completetodo,setCompleteTodo] = useState([])

  const input_text = (event) => {
    setText(event)
  }

  const input_button = () => {
    const newtodo = [...nowtodo,text];
    setNowTodo(newtodo)
    setText("")
  }

  const DeleteTodo = (index) => {
    const CopyTodo = [...nowtodo]
    CopyTodo.splice(index,1)
    setNowTodo(CopyTodo)
  }

  const DoneTodo = (index) => {
    const CopyTodo = [...nowtodo]
    CopyTodo.splice(index,1)
    const bbb = [...completetodo,nowtodo[index]]
    setNowTodo(CopyTodo)
    setCompleteTodo(bbb)
  }

  const RemoveTodo = (index) => {
    const CopyTodo = [...completetodo]
    CopyTodo.splice(index,1)

    const bbb = [...nowtodo,completetodo[index]]
    setCompleteTodo(CopyTodo)
    setNowTodo(bbb)
  }

  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="入力してください" onChange={(e) => input_text(e.target.value)} value={text} />
        <button onClick={input_button}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {nowtodo.map((todo,index) => {
            return(
              <div className="list-row" key={index}>
              <li>{todo}</li>
              <button onClick={() => DoneTodo(index)}>完了</button>
              <button onClick={() => DeleteTodo(index)}>削除</button>
            </div>
            )
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了済みのTodo</p>
        <ul>
          {completetodo.map((todo,index) => {
            return(
              <div className="list-row" key={index}>
              <li>{todo}</li>
              <button onClick={() => RemoveTodo(index)}>戻す</button>
            </div>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
