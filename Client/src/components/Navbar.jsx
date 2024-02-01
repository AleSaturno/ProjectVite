import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



const Navbar = () => {
  const {isAuthenticated, logout, user} = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to="/">Tasks Manager</Link>
      </h1>
      <ul className="flex gap-x-3">
      
        {isAuthenticated ? (
          <>
            <li className="bg-indigo-500 px-4 py-1 rounded-sm">Welcome {user.username} </li>
            <li>
              <Link to="/tasks" className="bg-indigo-500 px-4 py-1 rounded-sm">Tasks</Link>
            </li>
            <li>
              <Link Link to="/add-tasks"className="bg-indigo-500 px-4 py-1 rounded-sm" >Add-Tasks</Link>
            </li>

            <li>
                <Link to='/' onClick={() => logout()} className="bg-red-500 px-4 py-1 rounded-sm" >LogOut</Link>
            </li>
            
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
            </li>
            <li>
              <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm" >Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
