import './App.css';
import TODO from './component/TODO'
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <User_layout> */}
      <Routes>   
        <Route path="/" element={<TODO />} />
        
      </Routes>
      {/* </User_layout> */}
    </Router>
  );
}

export default App;
