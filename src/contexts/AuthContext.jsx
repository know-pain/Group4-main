import { createContext,useContext,useState } from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext({
    userToken:'',
    isAuthenticated:null,
    login:()=>{},
    logout:()=>{}
})

const AuthProvider = ({children})=>{
   const [token,setToken] = useState(localStorage.getItem("token"))
   
   const login = (data)=>{
   setToken(data)
   localStorage.setItem("token",data)
   }
   const logout = ()=>{
    localStorage.removeItem("token")
    setToken(null)
   }
   const value ={
    token:token,
    login:login,
    logout:logout,
    isAuthenticated:!!token
   }
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
    children:PropTypes.node
} 

export default AuthProvider

export const useAuth = ()=>{
    return(
        useContext(AuthContext)
    )
}