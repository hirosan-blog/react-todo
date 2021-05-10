import React from 'react'

const NowTodo = () => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        <div className="list-row">
          <li>1のタスク</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
    </div>
  )
}

export default NowTodo
