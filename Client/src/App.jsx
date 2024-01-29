import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import TasksPage from "./pages/Tasks/tasks";
import NewTask from "./pages/Add-Tasks/add-tasks";
import UpdateTask from "./pages/Tasks-Id/tasks-id";
import Profile from "./pages/Profile/profile";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-tasks" element={<NewTask />} />
                <Route path="/tasks/:id" element={<UpdateTask />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
