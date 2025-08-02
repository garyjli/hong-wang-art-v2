import './styles/App.css'

import Header from './Header.tsx'
import Featured from './Featured.tsx'

function App() {
  return(
    <div className="page-container">
      <Header/>
      <Featured/>
    </div>
  );
}

export default App