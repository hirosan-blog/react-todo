import React,{useState} from 'react'

const Input = () => {
  const [text,setText] = useState("")

  const add_text= (event) => {
    setText(event)
  }

  const add_todo = () => {
    console.log(text)
  }

  return (
    <div className="input-area">
      <input type="text" placeholder="入力してください" onChange={(e) => add_text(e.target.value) }/>
      <button onClick={ add_todo }>追加</button>
    </div>
  )
}

export default Input
