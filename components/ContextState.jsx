import React from 'react'

const Context = React.createContext()


const ContextState = (props) => {

    const [show,setShow] = React.useState(Array(6).fill(true))
    



    const handleClick=(ix)=>{
      const ns = [...show]
      ns[ix] = false
      setShow(ns)
    }

    const handleClick2 = (ix)=>{
      const ns = [...show]
      if(ns[ix] === false){
        ns[ix] = true
        setShow(ns)
      }else return
    }

  
    
  return (
    <Context.Provider value={{show,setShow,handleClick,handleClick2}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextState,Context}