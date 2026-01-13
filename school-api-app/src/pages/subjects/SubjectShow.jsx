import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"

export default function SubjectShow() {

  // const subject = {
  //   id: 1,
  //   subject_name: "Mathematics",
  //   subject_index: "MATH101",
  //   subject_order: 1,
  //   subject_color: "#ff0000",
  //   subject_no: 5,
  // }
   const { id } = useParams()
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`http://localhost:8000/api/subjects/${id}`)
        // If API returns { success: true, data: {...} }
        setSubject(res.data.data || res.data)
      } catch (error) {
        console.error("Failed to fetch subject:", error)
        alert("Failed to fetch subject data")
      } finally {
        setLoading(false)
      }
    }
    fetchSubject()
  }, [id])

  if (loading) return <div className="text-center mt-10">Loading...</div>
  if (!subject) return <div className="text-center mt-10">Subject not found</div>
  return (
    <div className="flex justify-center mt-10 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6 bg-[#1f4e7a] text-white py-2 rounded">
          Details of {subject.subject_name}
        </h2>

        <table className="w-full table-auto text-center border">
          <tbody>
            <tr className="border-b">
              <th className="py-2">Subject Name</th>
              <td className="py-2">{subject.subject_name}</td>
            </tr>
            <tr className="border-b">
              <th className="py-2">Subject Index</th>
              <td className="py-2">{subject.subject_index}</td>
            </tr>
            <tr className="border-b">
              <th className="py-2">Subject Order</th>
              <td className="py-2">{subject.subject_order}</td>
            </tr>
            <tr className="border-b">
              <th className="py-2">Subject Color</th>
              <td className="py-2">
                <input
                  type="color"
                  value={subject.subject_color}
                  disabled
                  className="w-12 h-10 rounded-md border"
                />
              </td>
            </tr>
            <tr className="border-b">
              <th className="py-2">Subject No</th>
              <td className="py-2">{subject.subject_no}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 text-center">
          <Link to="/subjects">
            <Button className="bg-gray-500 hover:bg-gray-600 px-6">
              Back to Subjects List
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
