import React from 'react'

const Content = ({list,handlecheck,handledelete}) => {
  return (
    <div>
        {
        list.map((li)=>(
           <li> 
            <input type="checkbox" checked={li.checked} onChange={()=>handlecheck(li.id)}/>
            <label>{li.name}</label>
            <button onClick={()=>handledelete(li.id)}>delete</button>
           </li>
        ))
        }
    </div>
  )
}

export default Content