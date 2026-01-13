import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"


export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      {/* Page content */}
      <main className="ml-[250px] flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
