import React from 'react'
 import Sublinks from './data'
 import { Globalvalue } from './Context'
import './index.css';
import {FaTimes} from 'react-icons/fa'

const Sidbar = () => { 
    const {issibarOpen , Closebar } = Globalvalue()
    // console.log(Sublinks)
  return (
    <div className={issibarOpen ? 'sid-container checkpoint' : 'sid-container'}>
        <button className='icons' onClick={Closebar}><FaTimes  /></button>
        
        {
            Sublinks.map((item) =>{
                const {pageId , page , links} =item
                return (
                    <div className="items" key={pageId}>
                      <h3>{page}</h3>
                      <div className="subitems">
                       {links.map((item) =>{
                          const {id,url,icon,label} = item
                          return(
                           
                              <a href={url}  key={id}> 
                                 {icon}  
                                 {label}
                              </a>
                          )
                       })}
                      </div>
                       
                    </div>
                )
            })
        }
    </div>
  )
}

export default Sidbar