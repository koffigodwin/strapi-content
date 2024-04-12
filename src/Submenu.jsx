import React ,{useRef} from 'react'
import Sublinks from './data'
import { Globalvalue } from './Context'
import './index.css'

const Submenu = () => {
    const {pageId, setPageId} = Globalvalue()
    
    const currentpage = Sublinks.find((item) => 
      item.pageId ===pageId
    )

    const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
    // console.log(currentpage)
  return (
    <div className={currentpage?'submenu show-submenu' : 'submenu'} 
      onMouseLeave={handleMouseLeave} ref={submenuContainer}>
      <h5>{currentpage?.page}</h5>
      <div className="submenu-links" 
       style={{gridTemplateColumns: currentpage?.links?.length > 3 ? '1fr 1fr' : '1fr 1fr'}}> 
        {currentpage?.links.map((item)=>{
            const {id,url,label,icon} = item
            return <a key={id} href={url}>
                {icon}
                {label}
            </a>
        })}
        </div> 
     </div>
                

  )
}

export default Submenu