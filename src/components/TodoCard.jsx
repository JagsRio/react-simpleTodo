import React from 'react'

const TodoCard = ( {index, item, handleDeleteItem, handleEditItem } ) => {
  
  return (
    <div>
      <li className='todoItem'>
        <p>{item}</p>
        <div className='actionsContainer'>
          <button onClick={()=>handleEditItem(index)} ><i className="fa-solid fa-pen-to-square"></i></button>
          <button onClick={()=>handleDeleteItem(index)}><i className="fa-regular fa-trash-can"></i></button>
        </div>
        </li>
    </div>
  )
}

export default TodoCard