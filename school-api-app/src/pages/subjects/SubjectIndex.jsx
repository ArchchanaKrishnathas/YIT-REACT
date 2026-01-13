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

export default function SubjectIndex() {
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Fetch subjects on mount
  useEffect(() => {
    fetchSubjects()
  }, [])

  const fetchSubjects = async () => {
    try {
      setLoading(true)
      const res = await axios.get("http://localhost:8000/api/subjects")
      // If API returns { success: true, data: [...] }
      setSubjects(res.data.data)
    } catch (err) {
      console.error("Failed to fetch subjects:", err)
      alert("Failed to fetch subjects")
    } finally {
      setLoading(false)
    }
  }

  const deleteSubject = async (id) => {
    if (!confirm("Do you want to delete this subject?")) return
    try {
      await axios.delete(`http://localhost:8000/api/subjects/${id}`)
      fetchSubjects()
      alert("Subject deleted successfully")
    } catch (err) {
      console.error("Failed to delete subject:", err)
      alert("Failed to delete subject")
    }
  }

  if (loading) {
    return <p className="text-center mt-10">Loading subjects...</p>
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#1f4e7a] text-white px-4 py-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">Subject Details</h2>

        <Button onClick={() => navigate("/subjects/create")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Subject
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4">Subject Name</TableHead>
            <TableHead>Subject Index</TableHead>
            <TableHead>Subject Order</TableHead>
            <TableHead>Subject Color</TableHead>
            <TableHead>Subject No</TableHead>
            <TableHead className="text-center px-5">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.isArray(subjects) && subjects.length > 0 ? (
            subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell className="px-4">{subject.subject_name}</TableCell>
                <TableCell>{subject.subject_index}</TableCell>
                <TableCell>{subject.subject_order}</TableCell>
                <TableCell>
                  <input
                    type="color"
                    value={subject.subject_color}
                    disabled
                    className="w-10 h-6 border rounded"
                  />
                </TableCell>
                <TableCell>{subject.subject_no}</TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => navigate(`/subjects/${subject.id}/edit`)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => navigate(`/subjects/${subject.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => deleteSubject(subject.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                No subjects found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
