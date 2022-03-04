import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {
  const {isSubmenuOpen,location,page : {page,links}} = useGlobalContext();
  const containerRef = useRef(null);
  const {center,bottom} = location;
  const [columns, setColumns] = useState('col-2');

  useEffect(()=>{
    setColumns('col-2')
    containerRef.current.style.left = `${center}px`
    containerRef.current.style.top = `${bottom}px`
    if(links.length === 3){
      setColumns('col-3')
    }
    if(links.length > 3){
      setColumns('col-4')
    }

  },[location,links])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={containerRef}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
        {links.map((link,index)=>{
            const {url,icon,label} = link;
            return(
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
        })}

        </div>
        
    </aside>
  )
}

export default Submenu
