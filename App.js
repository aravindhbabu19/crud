
import { useEffect, useState } from 'react';
import './App.css';
import Content from './Content';
import AddItem from './AddItem';
import Fetch from './Fetch';

function App() {
  const [newItem,setNewItem]=useState('')
  const Apiurl="http://localhost:3500/list"
  const [list,setList]=useState([])
  const [loading,setLoading]=useState(true)
  const [fetchError,setFetchError]=useState(null)
  useEffect(()=>{
    const fetchData=async()=>{
    try{
   const Response=await fetch(Apiurl)
   if (!Response.ok) throw Error('Data not received')
   console.log(Response)
   const result=await Response.json()
   setList(result)
   setFetchError(null)
    }
    catch(err){
      setFetchError(err.message)
  }
  finally{
    setLoading(false)
  }
  }
  setTimeout(()=>{
    (async()=>await fetchData())()
  },2000)
  
},[])

const handleSubmit=(e)=>{
  e.preventDefault()
  addItem(newItem)

}
const addItem=async(newitem)=>{
 const id=list.length? list[list.length-1].id+1 : 1
 const addnew={id,checked:false,name:newitem}

 const postmethod={
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(addnew)
 }
 const result=await Fetch(Apiurl,postmethod)
 if(result) setFetchError(result)
 setNewItem('')
}

  return (
   <div>
    <main>
      {loading && <p>page is loading</p>}
      {fetchError && <p>`Error:${fetchError}`</p>}
   <Content list={list} setList={setList}/>
   </main>
   <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
   </div>
  );
}

export default App;
