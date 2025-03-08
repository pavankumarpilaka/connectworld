import React, { createContext, useState } from 'react'
import { Influencers } from '../assets/assets'

// Create the AppContext
export const AppContext = createContext()

const AppContextProvider = (props) => {
    const currsymbol = '₹'
    const [token, settoken] = useState(false) // Set token as a boolean for better handling (true/false)
    
    // The value passed to the context includes the setToken function
    const value = { 
        Influencers, 
        currsymbol, 
        token, 
        settoken // Pass the setter function so other components can update the token
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
