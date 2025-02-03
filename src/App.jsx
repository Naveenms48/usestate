import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    if(count>10){
      setCount(1)
    }
    else if(count<-10){
      setCount(1)
    }
  },[count])
  
  const add = () =>{
    setCount((count) => 
      count + 1
    )
  }

  const sub = () =>{
    setCount((count) =>
      count - 1
  )
}
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </div>
  )
}

export default App
