import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
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

export default function StudentCreate() {
 const [grades, setGrades] = useState([]);
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
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchGrades();
  }, []);

  const fetchGrades = async () => {
    const res = await api.get("/grades");
    setGrades(res.data.data);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      await api.post("/students", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Student registered successfully");
      navigate("/students");
    } catch (err) {
      if (err.response?.data?.errors) {
        alert(Object.values(err.response.data.errors).flat().join("\n"));
      } else {
        alert("Failed to register student");
      }
    }
  };


  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6 bg-[#1f4e7a] text-white py-2 rounded">
          Student Registration
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
              placeholder="Enter Father Name"
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
              placeholder="Enter Student Name"
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
              placeholder="Enter Admission Number"
            />
          </div>

          {/* Grade */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="grade_id">Grade</Label>
            <Select
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
              placeholder="Enter NIC No"
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
              placeholder="Enter Telephone No"
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
              placeholder="Enter Address"
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
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
