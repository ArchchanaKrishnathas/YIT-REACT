import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Students
import StudentIndex from './pages/students/StudentIndex';
import StudentCreate from './pages/students/StudentCreate';
import StudentEdit from './pages/students/StudentEdit';
import StudentShow from './pages/students/StudentShow';

// Grades
import GradeIndex from './pages/grades/GradeIndex';
import GradeCreate from './pages/grades/GradeCreate';
import GradeEdit from './pages/grades/GradeEdit';
import GradeShow from './pages/grades/GradeShow';

// Subjects
import SubjectIndex from './pages/subjects/SubjectIndex';
import SubjectCreate from './pages/subjects/SubjectCreate';
import SubjectEdit from './pages/subjects/SubjectEdit';
import SubjectShow from './pages/subjects/SubjectShow';
import Login from './pages/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<StudentIndex />} />

          
          {/* Students routes */}
          <Route path="students">
            <Route index element={<StudentIndex />} />
            <Route path="create" element={<StudentCreate />} />
            <Route path=":id/edit" element={<StudentEdit />} />
            <Route path=":id" element={<StudentShow />} />
          </Route>

          {/* Grades routes */}
          <Route path="grades">
            <Route index element={<GradeIndex />} />
            <Route path="create" element={<GradeCreate />} />
            <Route path=":id/edit" element={<GradeEdit />} />
            <Route path=":id" element={<GradeShow />} />
          </Route>

          {/* Subjects routes */}
          <Route path="subjects">
            <Route index element={<SubjectIndex />} />
            <Route path="create" element={<SubjectCreate />} />
            <Route path=":id/edit" element={<SubjectEdit />} />
            <Route path=":id" element={<SubjectShow />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
