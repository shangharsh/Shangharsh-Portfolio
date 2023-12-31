import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import ProjectDetails from "./pages/Projects/ProjectDetails"
import Footer from "./components/Footer/Footer"
import { Alert } from "@mui/material"

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header/>
        <Alert variant="filled" className="w-50 mt-0 mb-0 ms-auto me-auto" severity="warning">
          This Website is UnderConstruction. Sorry for the inconvenienc. — check it out later!
        </Alert>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projectdetails" element={<ProjectDetails/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
