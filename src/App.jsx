import React, { useEffect, useState } from 'react';
import TodoInput from './components/Todoinput';
import TodoList from './components/TodoList';

const App = () => {
  const[todos, setTodos] = useState([]);
  const [newValue, setNewValue] = useState('');

  const persistData = (newList) =>{
    localStorage.setItem('todos', JSON.stringify( {todos: newList}))
  }

  const handleAddItem = (newItem) =>{
    const newToDoList = [...todos, newItem];
    persistData(newToDoList);
    setTodos(newToDoList)
  }

  const handleDeleteItem = (indexToDelete) =>{
    const newToDoList = todos.filter((_,index)=> index !== indexToDelete)
    persistData(newToDoList);
    setTodos(newToDoList);
  }

  const handleEditItem = (index) =>{
    const itemToEdit = todos[index]
    setNewValue(itemToEdit);
    handleDeleteItem(index)
  }

  useEffect(()=>{
    if (!localStorage){
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos){
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAddToDo={handleAddItem} newValue={newValue} setNewValue={setNewValue}  />
      <TodoList todos={todos} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
    </>
  )
}

export default App