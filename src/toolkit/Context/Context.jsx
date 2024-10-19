import React, { createContext, useContext, useEffect, useState } from 'react'

 const authCreate = createContext()
const Context = ({children}) => {
  const initialValue = {
    user:null,
    token:""
  }
    const [auth,setAuth] = useState(initialValue)
    useEffect(()=>{
      const data = localStorage.getItem("auth") 
      const parseData = JSON.parse(data)
      if(data){
        // const parseData = JSON.parse(data)
        setAuth(
         {
          ...auth,
          user:parseData.user,
          token:parseData.token
         }

        )
      }
    },[])

  return (
    <>
    <authCreate.Provider value={[auth,setAuth]}>
        {children}
    </authCreate.Provider>
    </>
  )
}

const useAuth = ()=>useContext(authCreate)
export {useAuth,Context}
