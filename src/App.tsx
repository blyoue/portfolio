import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import './App.css'
import Skills from './Skills';
import Contact from './Contact';
import Home from './Home';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
 