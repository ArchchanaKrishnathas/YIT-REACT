import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "@/services/api"

import { Pencil, Eye, Trash2, BookOpen, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function StudentIndex() {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
  try {
    const res = await api.get("/students");
    console.log("API response:", res.data);
    setStudents(res.data.data); // <-- use .data
  } catch (err) {
    console.error("Failed to fetch students:", err);
  }
};

  const deleteStudent = async (id) => {
    if (confirm("Do you want to delete?")) {
      // await axios.delete(`http://localhost:8000/api/students/${id}`)
      await api.delete(`/students/${id}`)
      fetchStudents()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header row */}
      <div className="flex items-center justify-between bg-[#1f4e7a] text-white px-4 py-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">Students Details</h2>

        <Button onClick={() => navigate("/students/create")}>
           <UserPlus className="mr-2 h-4 w-4" /> Add New Student
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Profile</TableHead>
            <TableHead>Father Name</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Admission No</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>NIC No</TableHead>
            <TableHead>DOB</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Telephone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-center" colSpan={4}>
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <img
                  src={
                    student.image_path
                      ? `http://localhost:8000/storage/${student.image_path}`
                      : "/default_profile.jpg"
                  }
                  className="w-14 h-14 rounded-full object-cover"
                />
              </TableCell>

              <TableCell>{student.father_name}</TableCell>
              <TableCell>{student.student_name}</TableCell>
              <TableCell>{student.admission_no}</TableCell>
              <TableCell>{student.grade?.grade_name}</TableCell>
              <TableCell>{student.nic_no}</TableCell>
              <TableCell>{student.date_of_birth}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.telephone_no}</TableCell>
              <TableCell>{student.address}</TableCell>

              <TableCell>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => navigate(`/students/${student.id}/edit`)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </TableCell>

              <TableCell>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => navigate(`/students/${student.id}`)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>

              <TableCell>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteStudent(student.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>

              <TableCell>
                <Button size="icon" variant="success">
                  <BookOpen className="h-4 w-4" />
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
