import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={< />} /> */}
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;