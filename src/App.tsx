import './styles/App.css'

import Header from './Header.tsx'
import Featured from './Featured.tsx'
import Gallery from './Gallery.tsx'
import Info from './Info.tsx'

import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div className="page-container">
      <Header/>

      <Routes>
        {/* pass in prop to highlight current header link */}
        <Route path="/" element={<Featured />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App