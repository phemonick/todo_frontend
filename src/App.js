import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './todoList';
import AllTodo from './allTodo';

function App() {
  const [description, setDescription] = useState('')
  const [todos, setTodo] = useState([])
  
  const addTodo =async () => {
    const response = await fetch('http://localhost:4000/api/todo', {
      method: "POST",
      body: JSON.stringify({description: description}),
    headers:{
      'Content-Type': 'application/json'
    }
    })
    // eslint-disable-next-line
    const json = await response.json();
    fetchApi();
  }

  const updateTodo = async (id) => {
    console.log(id)
    const response = await fetch(`http://localhost:4000/api/todo/${id}`, {
      method: "PUT",
      body: JSON.stringify({status: 'completed'}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    // eslint-disable-next-line
    const json = await response.json();
    fetchApi();
  }

  async function fetchApi() {
   const response = await fetch('http://localhost:4000/api/todo')
   const json = await response.json();
   setTodo(json)
  }
  
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      {
        !!todos.length && todos.map((todo, index)=> <AllTodo key={todo.id} update={updateTodo} description={todo.description} id={todo.id} status={todo.status} createdAt={todo.createdAt} />)
      }
      <TodoList description={description} addItem={addTodo} setDescription={setDescription} />
    </div>
  );
}

export default App;
