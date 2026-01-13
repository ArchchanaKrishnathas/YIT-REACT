import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"

export default function GradeShow() {

  // Mock data 
  // const [grade] = useState({
  //   id: 1,
  //   grade_name: "Grade 10",
  //   grade_group: "Science",
  //   grade_color: "#ff5733",
  //   grade_order: 3,
  // })
  
  const { id } = useParams()
  const navigate = useNavigate()
  const [grade, setGrade] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGrade = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:8000/api/grades/${id}`)
        // safely handle API response
        setGrade(response.data.data || response.data)
      } catch (error) {
        console.error(error)
        alert("Failed to fetch grade details")
      } finally {
        setLoading(false)
      }
    }
    fetchGrade()
  }, [id])

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (!grade) return <p className="text-center mt-10">Grade not found</p>

  return (
    <div className="flex justify-center mt-10 bg-gray-100 ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6 bg-[#1f4e7a] text-white py-2 rounded">
          Details of {grade.grade_name}
        </h2>

        <table className="table-auto w-full text-center border-collapse border border-gray-200">
          <tbody>
            <tr className="border">
              <th className="border px-2 py-1 text-left">Grade Name</th>
              <td className="border px-2 py-1">{grade.grade_name}</td>
            </tr>
            <tr className="border">
              <th className="border px-2 py-1 text-left">Grade Group</th>
              <td className="border px-2 py-1">{grade.grade_group}</td>
            </tr>
            <tr className="border">
              <th className="border px-2 py-1 text-left">Grade Color</th>
              <td className="border px-2 py-1">
                <input type="color" value={grade.grade_color} disabled className="w-12 h-8 p-1 rounded-md border" />
              </td>
            </tr>
            <tr className="border">
              <th className="border px-2 py-1 text-left">Grade Order</th>
              <td className="border px-2 py-1">{grade.grade_order}</td>
            </tr>
          </tbody>
        </table>

        <div className="text-center mt-4">
          <Button
            onClick={() => navigate("/grades")}
            className="bg-gray-600 hover:bg-gray-700"
          >
            Back to Grades List
          </Button>
        </div>
      </div>
    </div>
  )
}
