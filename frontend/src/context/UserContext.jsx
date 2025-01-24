import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const [ token, setToken] = useState (true)

    const logout = () => {
        setToken(false)
    }

    return(
        <UserContext.Provider value={{ token, setToken, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const ProtectedRoutes = ({children}) => {
    const {token} = useUser()

        if (!token) {
            return <Navigate to="/login"/>
        } 
        return children
        
}

export const PublicRoutes = ({children}) => {
    const {token} = useUser()

        if (token) {
            return <Navigate to="/"/>
        } 
        return children
        
}

export const useUser = () => useContext(UserContext)
export default ProtectedRoutes
