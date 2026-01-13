import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function StudentEdit() {
  const { id } = useParams() // get student ID from route
  const navigate = useNavigate()
  const [grades, setGrades] = useState([])
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    father_name: "",
    student_name: "",
    admission_no: "",
    grade: "",
    nic_no: "",
    date_of_birth: "",
    gender: "",
    telephone_no: "",
    address: "",
    student_image: null,
  })

  // Fetch grades and student data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const gradesRes = await axios.get("http://localhost:8000/api/grades")
        setGrades(gradesRes.data.data || gradesRes.data)

        const studentRes = await axios.get(`http://localhost:8000/api/students/${id}`)
        const student = studentRes.data.data || studentRes.data

        setFormData({
          father_name: student.father_name || "",
          student_name: student.student_name || "",
          admission_no: student.admission_no || "",
          grade: student.grade_id?.toString() || "",
          nic_no: student.nic_no || "",
          date_of_birth: student.date_of_birth || "",
          gender: student.gender || "",
          telephone_no: student.telephone_no || "",
          address: student.address || "",
          student_image: null,
        })
      } catch (err) {
        console.error(err)
        alert("Failed to fetch student or grades data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) setFormData({ ...formData, [name]: files[0] })
    else setFormData({ ...formData, [name]: value })
  }

    const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "student_image" && !value) return; // skip empty image
      if (key === "grade") data.append("grade_id", value); // match backend
      else data.append(key, value);
    });

    try {
      await axios.post(`http://localhost:8000/api/students/${id}?_method=PUT`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Student updated successfully");
      navigate("/students");
    } catch (err) {
      console.error(err);
      if (err.response?.data?.errors) {
        alert(Object.values(err.response.data.errors).flat().join("\n"));
      } else if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Failed to update student");
      }
    }
  };

  if (loading) return <p className="text-center mt-10">Loading student data...</p>

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6 bg-[#1f4e7a] text-white py-2 rounded">
          Edit Student Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Father Name */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="father_name">Father Name</Label>
            <Input
              id="father_name"
              name="father_name"
              value={formData.father_name}
              onChange={handleChange}
            />
          </div>

          {/* Student Name */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="student_name">Student Name</Label>
            <Input
              id="student_name"
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
            />
          </div>

          {/* Admission No */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="admission_no">Admission No</Label>
            <Input
              id="admission_no"
              type="number"
              name="admission_no"
              value={formData.admission_no}
              onChange={handleChange}
            />
          </div>

          {/* Grade */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="grade">Grade</Label>
            <Select
              value={formData.grade}
              onValueChange={(val) =>
                setFormData({ ...formData, grade: val })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade.id} value={grade.id.toString()}>
                    {grade.grade_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* NIC No */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="nic_no">NIC No</Label>
            <Input
              id="nic_no"
              type="number"
              name="nic_no"
              value={formData.nic_no}
              onChange={handleChange}
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="date_of_birth">Date of Birth</Label>
            <Input
              id="date_of_birth"
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-y-2">
            <Label>Gender</Label>
            <div className="flex items-center gap-6 mt-1">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          {/* Telephone No */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="telephone_no">Telephone No</Label>
            <Input
              id="telephone_no"
              type="number"
              name="telephone_no"
              value={formData.telephone_no}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Upload Image */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="student_image">Upload Image</Label>
            <input
              id="student_image"
              type="file"
              name="student_image"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" className="mt-4 bg-green-600 hover:bg-green-700">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
