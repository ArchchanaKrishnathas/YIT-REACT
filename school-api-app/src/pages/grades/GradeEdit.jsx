import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"

export default function GradeEdit() {
   const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    grade_name: "",
    grade_group: "",
    grade_color: "#000000",
    grade_order: ""
  })
  const [loading, setLoading] = useState(true)

  // Fetch existing grade data
  useEffect(() => {
    const fetchGrade = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:8000/api/grades/${id}`)
        const data = response.data.data || response.data
        setFormData({
          grade_name: data.grade_name || "",
          grade_group: data.grade_group || "",
          grade_color: data.grade_color || "#000000",
          grade_order: data.grade_order || ""
        })
      } catch (error) {
        console.error(error)
        alert("Failed to fetch grade data")
      } finally {
        setLoading(false)
      }
    }
    fetchGrade()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8000/api/grades/${id}`, formData)
      alert("Grade updated successfully")
      navigate("/grades")
    } catch (error) {
      console.error(error)
      alert("Failed to update grade")
    }
  }

  if (loading) return <p className="text-center mt-10">Loading grade data...</p>
  return (
    <div className="flex justify-center mt-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6 bg-[#1f4e7a] text-white py-2 rounded">
          Edit Grade Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="gr_id" value={id} />

          <div>
            <label htmlFor="grade_name" className="block mb-1 font-medium">
              Grade Name
            </label>
            <input
              type="text"
              id="grade_name"
              name="grade_name"
              value={formData.grade_name}
              onChange={handleChange}
              className="form-input w-full rounded-md border px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="grade_group" className="block mb-1 font-medium">
              Grade Group
            </label>
            <input
              type="text"
              id="grade_group"
              name="grade_group"
              value={formData.grade_group}
              onChange={handleChange}
              className="form-input w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="grade_color" className="block mb-1 font-medium">
              Grade Color
            </label>
            <input
              type="color"
              id="grade_color"
              name="grade_color"
              value={formData.grade_color}
              onChange={handleChange}
              className="w-16 h-10 p-1 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="grade_order" className="block mb-1 font-medium">
              Grade Order
            </label>
            <input
              type="number"
              id="grade_order"
              name="grade_order"
              step="any"
              value={formData.grade_order}
              onChange={handleChange}
              className="form-input w-full rounded-md border px-3 py-2"
              required
            />
          </div>

          <div className="text-center mt-4">
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
