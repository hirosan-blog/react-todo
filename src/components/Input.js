import React,{useState} from 'react'

const Input = (props) => {
  const {input_text,text,input_button} = props
  return (
    <div className="input-area">
    <input type="text" placeholder="入力してください" onChange={(e) => input_text(e.target.value)} value={text} />
    <button onClick={input_button}>追加</button>
  </div>
  )
}

export default Input
