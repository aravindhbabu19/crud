
import { useEffect, useState } from 'react';
import './App.css';
import Content from './Content';
import AddItem from './AddItem';
import Fetch from './Fetch';

function App() {
  const [list,setList]=useState([])
  const [fetchError,setFetchError]=useState(null)
  const [newItem,setNewItem]=useState("")
  const Apiurl="http://localhost:3500/list"
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await fetch(Apiurl)
        if(!response.ok) throw Error('data not received')
        const result=await response.json()
        setList(result)
        setFetchError(null)
      }
      catch(err){
        console.log(err)
      }
    }
    (async()=>await fetchData())()
  })
  const handlecheck=async(id)=>{
    const result=list.map((li)=>li.id===id? {...li,checked:!li.checked}:li)
    const mylist=list.filter((li)=>li.id===id)
    setList(result)
    const patchmethod={
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({checked:mylist[0].checked})
    }
    const requrl=`${Apiurl}/${id}`
    const result1=await Fetch(requrl,patchmethod)
    if(result1) setFetchError(result1)
  }
  const handledelete=async(id)=>{
    const result=list.filter((li)=>li.id!==id)
    setList(result)
    const delmethod={method:'DELETE'}
    const requrl=`${Apiurl}/${id}`
    const result1=await Fetch(requrl,delmethod)
    if(result1) setFetchError(result1)

  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    addnew(newItem)
  }
  const addnew=(add)=>{
    const id=list.length? list[list.length-1].id+1 : 1
    const addn={id,checked:false,name:add}
    const postmethod={
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addn)
    }
    const result=Fetch(Apiurl,postmethod)
    if(result) setFetchError(result)
    setNewItem('')
  }
  return (
   <div>
   <Content list={list}  handlecheck={handlecheck} handledelete={handledelete} key={list.id}/>
   <AddItem newItem={newItem} setNewItem={setNewItem} handlesubmit={handlesubmit}/>
   </div>
  );
}

export default App;
