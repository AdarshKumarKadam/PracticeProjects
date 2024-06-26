import { Toaster } from "react-hot-toast"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <div className="text-3xl">
        <Navbar />
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
      <Toaster></Toaster>
    </>
  )
}

export default App
