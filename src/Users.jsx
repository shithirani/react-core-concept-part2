import { useEffect, useState } from "react"

export default function Users(){
    const [use,setUse]=useState([])
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json()) 
       .then(data=>setUse(data))
    },[])
    return(
        <div>
<h3>use:{use.length}</h3>
        </div>
    )
}