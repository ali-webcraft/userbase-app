import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearToken } from "../store/authSlice"
import { Button } from "../ui/button"

const Navbar = ({theme , setTheme}) => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout () {
    dispatch(clearToken())
    navigate("/signIn")
  }

 function handleTheme() {
   setTheme(theme == "Light" ? "Dark" : "Light")
  } 
 return (
  
  <div className="flex justify-between items-center px-6 py-3"> 
  <h1 className="text-xl font-bold">User Base</h1>
  <div className="flex gap-2">
    <Button onClick={handleTheme}>{theme}</Button>
    <Button onClick={handleLogout}>Logout</Button>
</div>
</div>

  )
}

export default Navbar