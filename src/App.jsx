import { Routes, Route } from "react-router-dom"
import SignUp from "./components/pages/SignUp"
import SignIn from "./components/pages/SignIn"
import Dashboard from "./components/pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      } />
      <Route path="/signIn" element={
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App