import PropTypes from 'prop-types'
import { useAuth } from '../contexts/AuthContext'
import {Navigate} from 'react-router-dom'

const IsAuth = ({children})=>{
    const auth = useAuth()
    console.log(auth.isAuthenticated)
    if(!auth.isAuthenticated){
        return (
             <Navigate to={'/login'} state={{path:location.pathname}}/> 
        )
    }
    return children
}
IsAuth.propTypes = {
    children:PropTypes.node
} 
export default IsAuth