import React from 'react'

const Finish = () => {
  return (
    <div className="complete-area">
      <p className="title">完了済みのTodo</p>
      <ul>
        <div className="list-row">
          <li>完了済み</li>
          <button>戻す</button>
        </div>
      </ul>
    </div>
  )
}

export default Finish
