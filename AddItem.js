import React from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='add'>Add items</label>
        <input type="text" id='add' value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default AddItem