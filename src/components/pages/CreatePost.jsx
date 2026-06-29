import axiosInstance from "../../api/axiosInstance";
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CreatePost = ({ onSuccess }) => {

 const { register, handleSubmit, reset, formState: { errors } } = useForm()

 async function handlePosts(data) {
  try {
   await axiosInstance.post(`/rest/v1/posts`, { name: data.name, description: data.description })
   reset()
   onSuccess()
  }
  catch (error) {
   alert(error.response?.data?.message || "Something went wrong!")
  }
 }

 return (
  <div className="p-4 ">
   <Card className="shadow-xl">
    <CardHeader>
     <CardTitle className="text-2xl text-center">Create Post</CardTitle>
    </CardHeader>
    <CardContent>
     <form onSubmit={handleSubmit(handlePosts)} className="flex flex-col gap-4">
      <div>
       <Label htmlFor="title">Title</Label>
       <Input type="text" id="title" placeholder="Enter title" {...register("name", { required: "Name is required" })} />
       {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
       <Label htmlFor="description">Description</Label>
       <textarea
        id="description"
        placeholder="Enter description"
        rows={4}
        {...register("description", { required: "Description is required" })}
        className="w-full border rounded-md p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
       />
       {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>
      <Button type="submit" className="w-full">Post</Button>
     </form>
    </CardContent>
   </Card>
  </div>
 )
}

export default CreatePost