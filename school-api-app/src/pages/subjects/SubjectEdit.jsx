import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"

export default function SubjectEdit() {
      const { id } = useParams()
      const navigate = useNavigate()

      const [formData, setFormData] = useState({
        subject_name: "",
        subject_index: "",
        subject_order: "",
        subject_color: "#000000",
        subject_no: ""
      })
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetchSubject = async () => {
          try {
            setLoading(true)
            const res = await axios.get(`http://localhost:8000/api/subjects/${id}`)
            const data = res.data.data || res.data
            setFormData({
              subject_name: data.subject_name || "",
              subject_index: data.subject_index || "",
              subject_order: data.subject_order || "",
              subject_color: data.subject_color || "#000000",
              subject_no: data.subject_no || ""
            })
          } catch (error) {
            console.error(error)
            alert("Failed to fetch subject data")
          } finally {
            setLoading(false)
          }
        }
        fetchSubject()
      }, [id])

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.put(`http://localhost:8000/api/subjects/${id}`, formData)
          alert("Subject updated successfully!")
          navigate("/subjects")
        } catch (error) {
          console.error(error)
          alert("Failed to update subject")
        }
      }

      if (loading) return <p className="text-center mt-10">Loading subject data...</p>
      
  return (
    <div className="flex justify-center mt-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6 bg-[#1f4e7a] text-white py-2 rounded">
          Edit Subject Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subject_name" className="block mb-1 font-medium">Subject Name</label>
            <input
              type="text"
              id="subject_name"
              name="subject_name"
              value={formData.subject_name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="subject_index" className="block mb-1 font-medium">Subject Index</label>
            <input
              type="text"
              id="subject_index"
              name="subject_index"
              value={formData.subject_index}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="subject_order" className="block mb-1 font-medium">Subject Order</label>
            <input
              type="number"
              id="subject_order"
              name="subject_order"
              step="any"
              value={formData.subject_order}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="subject_color" className="block mb-1 font-medium">Subject Color</label>
            <input
              type="color"
              id="subject_color"
              name="subject_color"
              value={formData.subject_color}
              onChange={handleChange}
              className="w-12 h-10 rounded-md border"
            />
          </div>

          <div>
            <label htmlFor="subject_no" className="block mb-1 font-medium">Subject No</label>
            <input
              type="number"
              id="subject_no"
              name="subject_no"
              value={formData.subject_no}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="text-center mt-4">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 px-6">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
