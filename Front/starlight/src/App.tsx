// import './App.css'
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { NavBar } from "./components/NavBar"
import './assets/styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
