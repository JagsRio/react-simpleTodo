import React from "react";

const TodoInput =  ( {handleAddToDo, newValue, setNewValue} ) => {

    return(
        <header>
            <input value={newValue} onChange={(e)=>{
                setNewValue(e.target.value);
            }} placeholder="Enter to do item..." />
            <button onClick={()=>{
                handleAddToDo(newValue);
                setNewValue('');
            }} >Add</button>
        </header>
    )
}

export default TodoInput;