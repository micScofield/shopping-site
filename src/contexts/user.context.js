const { createContext, useState } = require("react");

export const UserContext = createContext({
    isAuthenticated: false
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}