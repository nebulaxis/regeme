
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import About from "./pages/about"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Sign-in' element={<SignIn/>}/>
      <Route path='/Sign-up' element={<SignUp/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      
      </Routes></BrowserRouter>
  )
}

