import './App.css'
import { Routes, Route } from 'react-router-dom'
import Form from './components/form'
import Submitted from './components/submitted'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<p>asdf</p>} />
        <Route path='/user-form' element={<Form />} />
        <Route path='/submitted' element={<Submitted />} />
      </Routes>
    </div>
  );
}

export default App;
