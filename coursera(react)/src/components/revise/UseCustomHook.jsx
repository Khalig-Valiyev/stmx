import React, { useEffect, useState } from 'react'



const useCustomConsoleLog= (data)=> {
    useEffect(()=>{
        console.log(data);
    },[data])
}




const UseCustomHook = () => {
   const [count,setCount] =  useState(0)
   useCustomConsoleLog(count)
  return (
    <div><h1>{count}</h1>
    <button onClick={()=>setCount(prevState=>prevState+1)}>Increase</button></div>
  )
}

export default UseCustomHook