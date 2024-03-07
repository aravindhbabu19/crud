import React from 'react'

const Content = ({list}) => {
  return (
    <div>
        <>
        {
            list.map((li)=>
            <li>
                <input type="checkbox" checked={li.checked}/>
                <label>{li.name}</label>
                <button>delete</button>
            </li>
            )
        }</>
    </div>
  )
}

export default Content