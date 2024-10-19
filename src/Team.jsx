import { useState } from "react"

export default function Team(){
    const teamStyle={
   border:'3px solid blue',
   padding:'12px',
   margin:'15px'
    }

    const [team,teamSet]=useState(0)

     const handleAdd=()=>{
        const newTeam=team+1
        teamSet(newTeam)
     }

     const handleReduce=()=>{
        const newTeam=team-1
        teamSet(newTeam)
     }

    return(
        <div style={teamStyle}>
            <h2>players:{team}</h2>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}