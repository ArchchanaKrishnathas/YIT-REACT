import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Pencil, Eye, Trash2, PlusCircle } from "lucide-react"

export default function GradeIndex() {
    const [grades, setGrades] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
      fetchGrades()
    }, [])

    const fetchGrades = async () => {
      try {
        setLoading(true)
        const res = await axios.get("http://localhost:8000/api/grades")
        // handle API response that might be { success: true, data: [...] }
        setGrades(res.data.data || res.data)
      } catch (error) {
        console.error("Failed to fetch grades:", error)
        alert("Failed to fetch grades")
      } finally {
        setLoading(false)
      }
    }

    const deleteGrade = async (id) => {
      if (confirm("Do you want to delete this grade?")) {
        try {
          await axios.delete(`http://localhost:8000/api/grades/${id}`)
          fetchGrades()
        } catch (error) {
          console.error("Failed to delete grade:", error)
          alert("Failed to delete grade")
        }
      }
    }

    if (loading) return <div className="text-center mt-10">Loading...</div>
    if (grades.length === 0) return <div className="text-center mt-10">No grades found.</div>

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#1f4e7a] text-white px-4 py-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">Grades Details</h2>

        <Button onClick={() => navigate("/grades/create")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Grade
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Grade Name</TableHead>
            <TableHead>Grade Group</TableHead>
            <TableHead>Grade Color</TableHead>
            <TableHead>Grade Order</TableHead>
            <TableHead className="text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell>{grade.grade_name}</TableCell>
              <TableCell>{grade.grade_group}</TableCell>

              <TableCell>
                <input
                  type="color"
                  value={grade.grade_color}
                  disabled
                  className="w-10 h-6 border rounded"
                />
              </TableCell>

              <TableCell>{grade.grade_order}</TableCell>

              <TableCell>
                <div className="flex justify-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => navigate(`/grades/${grade.id}/edit`)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={() => navigate(`/grades/${grade.id}`)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => deleteGrade(grade.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
