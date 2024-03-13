import React from 'react'

const AddItem = ({newItem,setNewItem,handlesubmit}) => {
  return (
    <div>
        <form onClick={handlesubmit} >
       <label htmlFor="nam">add</label> 
       <input type="text" id="nam" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
       <button type='submit'>addnew</button>
       </form>
    </div>
  )
}

export default AddItem