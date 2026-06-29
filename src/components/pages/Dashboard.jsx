import { useEffect, useState } from "react"
import axiosInstance from "../../api/axiosInstance"
import PostList from "../pages/PostList"
import CreatePost from "./CreatePost"
import Navbar from "../header/Navbar"

const Dashboard = () => {

 const [theme, setTheme] = useState("Light")
 const [user, setUser] = useState()
 const [post, setPost] = useState([])

 useEffect(() => {
  async function init() {
   try {
    const userRes = await axiosInstance.get(`/auth/v1/user`)
    setUser(userRes.data)
    const postsRes = await axiosInstance.get(`/rest/v1/posts`)
    setPost(postsRes.data)
   } catch (error) { }
  }
  init()
 }, [])

 async function fetchPosts() {
  try {
   const response = await axiosInstance.get(`/rest/v1/posts`)
   setPost(response.data)
  } catch (error) { }
 }
 return (
  <div className={theme === "Dark" ? "bg-black text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>
   <Navbar theme={theme} setTheme={setTheme} />
   <p className="flex justify-center p-5 gap-1 mb-5  " ><span className="font-bold ">User Email:</span>{user?.email}</p>
   <CreatePost onSuccess={fetchPosts} />
   <PostList post={post} fetchPosts={fetchPosts} />
  </div>
 )
}

export default Dashboard