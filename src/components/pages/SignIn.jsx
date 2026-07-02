import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch} from "react-redux"
import { setToken } from "../store/authSlice"
import axiosInstance from "../../api/axiosInstance"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function handleLogin(data) {
    try {
      const response = await axiosInstance.post(`/auth/v1/token?grant_type=password`, { email: data.email, password: data.password })
      dispatch(setToken(response.data.access_token))
      navigate("/dashboard")
    }
    catch (error) {
      alert(error.response?.data?.msg || "Something went wrong!")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <Button type="submit" className="w-full">Login</Button>
            <Link to="/" className="text-center text-sm text-gray-500">Don't have an account? <span className="underline">Sign Up</span></Link>
          </form>
        </CardContent>
      </Card>
    </div>
  )

}

export default SignIn