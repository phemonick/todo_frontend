import React from 'react'
const TodoList = ({ addItem, description, setDescription }) => (
  <div className="todoListMain">
      <div className="">
          <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Task" />
          <button onClick={addItem} type="submit"> Add Task </button>
      </div>
    </div>
)
export default TodoList