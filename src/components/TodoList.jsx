import React from 'react'
import TodoCard from './TodoCard';

const TodoList = ( {todos, handleDeleteItem, handleEditItem} ) => {
  return (
    <ul className='main'>
      {todos.map((todoItem, todoIndex)=>{
        return <TodoCard key={todoIndex} index={todoIndex} item={todoItem} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
      })}
    </ul>
  )
}

export default TodoList;