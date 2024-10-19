import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'




function App() {
  
  function handleClick(){
    alert('clicked')
  }

  const handleClick2=()=>{
    alert('clicked2')
  } 
  const handleClick4=(num)=>{
    alert(num+3)
  } 
 
  return (
    <>

      <h3>Core React Concept</h3>
        <Friends></Friends>
      <Users></Users>
      <Counter></Counter>

<Team></Team>


      <button onClick={handleClick}>click</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={()=>{alert('cliked3')}}>click3</button>
      {/* vejaila but needed */}
      <button onClick={()=>handleClick4(5)}>clicked4</button>
      
    </>
  )
}

export default App
