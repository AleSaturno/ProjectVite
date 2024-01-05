import Landing from "./components/Landing/landing"
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  

  return (
    <div>
         <Router>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
