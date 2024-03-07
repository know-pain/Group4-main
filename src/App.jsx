import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import AuthProvider from "./contexts/AuthContext"
import IsAuth from "./utils/RequireAuth"
import Apply from "./pages/Apply"


function App() {

  return (
<AuthProvider>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/apply" element={<Apply/>}/>
      <Route path="/dashboard" element={<IsAuth><Dashboard/></IsAuth>}/>
    </Routes>
  </Router>
</AuthProvider>)
}

export default App
