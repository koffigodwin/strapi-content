import React from 'react'
import './index.css'
import { Globalvalue } from './Context';
import { FaBars} from 'react-icons/fa'
import Navlinks from './Navlinks'

const Navbar = () => {
    const {Openbar ,setPageId} = Globalvalue()

    const Handlesubmenu = (e)=>{
     console.log(e.target);
    if (!e.target.classList.contains('linkes')) {
        setPageId(null)
    }
   };
    
  return (
     <nav onMouseOver={Handlesubmenu}>
        <div className='nav_container'>
        <div className="logo">
            <h3>STRAPI</h3>
        </div>
        
        <div className="nav_icon">
            <button className='nav_btn' onClick={Openbar}>
                <FaBars/>  
            </button>
        </div>
        <Navlinks />
      </div>
     </nav>
  )
}

export default Navbar