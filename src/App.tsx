import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
