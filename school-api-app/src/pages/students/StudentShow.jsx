import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"

export default function StudentShow() {
  const navigate = useNavigate()
  
  // MOCK student data
  const student = {
    student_name: "John Doe",
    father_name: "Michael Doe",
    admission_no: "12345",
    gradeinfo: { grade_name: "Grade 10" },
    nic_no: "123456789V",
    date_of_birth: "2008-05-12",
    gender: "Male",
    telephone_no: "0771234567",
    address: "123 Main Street, Colombo",
    image_path: "", 
    created_at: "2026-01-01 10:00",
    updated_at: "2026-01-05 12:00",
    updated_by: "Admin",
    subjects: ["Math", "Science", "English"]
  }

  // const { id } = useParams()
  // const navigate = useNavigate()
  // const [student, setStudent] = useState(null)

  // useEffect(() => {
  //   fetchStudent()
  // }, [])

  // const fetchStudent = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8000/api/students/${id}`)
  //     setStudent(res.data)
  //   } catch (error) {
  //     console.error(error)
  //     alert("Failed to fetch student")
  //   }
  // }

  // if (!student) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6 bg-[#1f4e7a] text-white py-2 rounded">
          {student.student_name}'s Details
        </h2>

        <div className="flex justify-center mb-4">
          <img
            src={
              student.image_path
                ? `http://localhost:8000/storage/${student.image_path}`
                : "https://via.placeholder.com/200"
            }
            alt="Student"
            className="h-48 w-48 object-cover rounded-full"
          />
        </div>

        <table className="table-auto w-full text-left border-collapse">
          <tbody className="divide-y">
            <tr>
              <th className="py-2 px-4 font-medium">Father Name</th>
              <td className="py-2 px-4">{student.father_name}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Student Name</th>
              <td className="py-2 px-4">{student.student_name}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Admission No</th>
              <td className="py-2 px-4">{student.admission_no}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Grade</th>
              <td className="py-2 px-4">{student.gradeinfo?.grade_name}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">NIC No</th>
              <td className="py-2 px-4">{student.nic_no}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Date of Birth</th>
              <td className="py-2 px-4">{student.date_of_birth}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Gender</th>
              <td className="py-2 px-4">{student.gender}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Telephone No</th>
              <td className="py-2 px-4">{student.telephone_no}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Address</th>
              <td className="py-2 px-4">{student.address}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Created At</th>
              <td className="py-2 px-4">{new Date(student.created_at).toLocaleString()}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Updated At</th>
              <td className="py-2 px-4">{new Date(student.updated_at).toLocaleString()}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 font-medium">Updated By</th>
              <td className="py-2 px-4">{student.updated_by || "-"}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6 text-center">
          <Button onClick={() => navigate("/students")} variant="secondary">
            Back to Student List
          </Button>
        </div>
      </div>
    </div>
  )
}
