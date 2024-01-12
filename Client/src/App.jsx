import Home from "./components/Home/Home";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import TasksPage from "./components/Tasks/tasks";
import NewTask from "./components/Add-Tasks/add-tasks";
import UpdateTask  from "./components/Tasks-Id/tasks-id";
import Profile from "./components/Profile/profile";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  

  return (
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
  )
}

export default App
