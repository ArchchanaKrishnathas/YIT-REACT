import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 ${
      isActive ? "bg-slate-700 text-white" : "hover:bg-slate-700"
    }`

  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-slate-800 text-white flex flex-col">
      <h2 className="text-xl font-bold text-center py-4">
        School System
      </h2>

      <nav className="flex-1 px-4 space-y-2">
        <NavLink to="/students" className={linkClass}>
          Students
        </NavLink>

        <NavLink to="/subjects" className={linkClass}>
          Subjects
        </NavLink>

        <NavLink to="/grades" className={linkClass}>
          Grades
        </NavLink>
      </nav>

      <div className="p-4">
        <Button variant="destructive" className="w-full">
          Logout
        </Button>
      </div>
    </aside>
  )
}
