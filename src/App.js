
import './style.css';
import React,{useState} from 'react'
import Input from './components/Input';
import NowTodo from './components/NowTodo';
import Finish from './components/Finish';

function App() {
  const [text,setText] = useState("")
  const [nowtodo,setNowTodo] = useState([])
  const [completetodo,setCompleteTodo] = useState([])

  const input_text = (event) => {
    setText(event)
  }

  const input_button = () => {
    if(text === "") return;
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
    <Input input_text={input_text} input_button={input_button} text={text}/>
    <NowTodo nowtodo={nowtodo} DoneTodo={DoneTodo} DeleteTodo={DeleteTodo} />
    <Finish completetodo={completetodo} RemoveTodo={RemoveTodo}/>
    </>
  );
}

export default App;
