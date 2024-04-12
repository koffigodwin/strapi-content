import React from 'react'
import Sublinks from './data' 
import './index.css'
import { Globalvalue } from './Context'

const Subside = () => {
  const {setPageId} = Globalvalue()
  return (
    <div className='navlinkscontainer'>
        {
         Sublinks.map((item) =>{
          const {pageId,page} = item
          return (
            <div className="pagelinks" key={pageId}>
              <button className='linkes'  onMouseEnter={() =>setPageId(pageId)
              } >{page}</button>
              
            </div>
          ) 
         })  
        }
    </div>
  )
}
// onMouseLeave={()=>setPageId(null)} onMouseOver={()=>setPageId(pageId)}

export default Subside