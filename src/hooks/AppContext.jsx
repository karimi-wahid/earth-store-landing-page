import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [sideToggle, setSideToggle] = useState(false);
    const handleSideToggle = () => {
        setSideToggle(!sideToggle)
    }
    return <AppContext.Provider value={{sideToggle, setSideToggle, handleSideToggle}} >
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}