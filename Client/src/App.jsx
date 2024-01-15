import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import TasksPage from "./pages/Tasks/tasks";
import NewTask from "./pages/Add-Tasks/add-tasks";
import UpdateTask  from "./pages/Tasks-Id/tasks-id";
import Profile from "./pages/Profile/profile";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  

  return (
    <AuthProvider>
        <div>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/tasks" element={<TasksPage/>}/>
              <Route path="/add-tasks" element={<NewTask/>}/>
              <Route path="/tasks/:id" element= {<UpdateTask/>}/>
              <Route path="profile" element={<Profile/>}/>
            </Routes>
          </Router>
        </div>
    </AuthProvider>
  )
}

export default App
