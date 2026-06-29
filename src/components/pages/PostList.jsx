import DataTable from "react-data-table-component"
import axiosInstance from "../../api/axiosInstance"
import { Button } from "@/components/ui/button"

const PostList = ({ post, fetchPosts }) => {

  const columns = [
    { name: "ID", selector: row => row.id },
    { name: "Name", selector: row => row.name },
    {
      name: "Description",
      selector: row => row.description,
      wrap: true
    },
    { name: "Created At", selector: row => row.created_at },
    {
      name: "Action", cell: row => (
        <Button variant="destructive" size="sm" onClick={() => handleDelete(row.id)}>Delete</Button>
      )
    }
  ]
  async function handleDelete(id) {
    await axiosInstance.delete(`/rest/v1/posts?id=eq.${id}`)
    fetchPosts()
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <DataTable
        columns={columns}
        data={post}
        pagination
        highlightOnHover
      />
    </div>
  )




}

export default PostList