import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'', links:[]})

    const openSubmenu = (text,coordinates) => {
        setIsSubmenuOpen(true);
        setLocation(coordinates);
        const page = sublinks.find((li) => li.page === text)
        setPage(page)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return <AppContext.Provider value={{isSidebarOpen, isSubmenuOpen,location,page, openSubmenu,closeSubmenu, openSidebar, closeSidebar}}>{children}</AppContext.Provider>
}

//use custom hook

export const useGlobalContext = () => useContext(AppContext);

export {AppProvider}