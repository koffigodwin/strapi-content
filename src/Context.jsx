import React, { useState , createContext , useContext } from 'react'
const Globalcontent = createContext();

const Context = ({children}) => {
 const [issibarOpen , setisSibarOpen] = useState(false) ;
 const [pageId, setPageId] = useState(null);
 

 const Openbar = () => {
    setisSibarOpen(true);
 }

 const Closebar = () => {
    setisSibarOpen(false);
 }
  return (
    <div>
     <Globalcontent.Provider value={{Openbar,Closebar,issibarOpen ,pageId , setPageId}} >
        {children}
     </Globalcontent.Provider>

    </div>
  )
}

export default Context

 export const Globalvalue  = () =>{
    return useContext(Globalcontent)
 } 