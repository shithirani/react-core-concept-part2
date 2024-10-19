import { useState } from "react"

export default function Counter(){
    const  [count,setCount]=useState(0)
   const handleAdd=()=>{
   const newCount=count+1
   setCount(newCount)
   }

   const hamdleReduce=()=>{
    const newCount=count-1
    setCount(newCount)
   }
    
    return(
        <div style={{border:'2px solid green'}}>
            <h3>counter:{count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={hamdleReduce}>reduce</button>
        </div>
    )
}