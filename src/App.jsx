import { Routes, Route } from "react-router-dom"
import SignUp from "./components/pages/SignUp"
import SignIn from "./components/pages/SignIn"
import Dashboard from "./components/pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App