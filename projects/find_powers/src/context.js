import React, { useState, useEffect } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[value,setValue] = useState(1)
  const[power,setPower] = useState(1)
  const[commit,setCommit] = useState("default")
  const[showArray,setShowArray] = useState([])

useEffect( ()=> {
//console.log("run useEffect")
let a = [];
for (let i = 0; i <= power; i++) {
  a[i]=Math.pow(value,i);
}
//console.log("a",a)
setShowArray(a)
},[commit])

  return (
    <AppContext.Provider value={{power,setPower,value,setValue,showArray,setCommit}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext,AppProvider}

 
