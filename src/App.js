import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './components/routes';


function App() {
  return (
    <BrowserRouter>
    <div className="main">
      
      <h2 className="main-header">Contact List</h2>
      <MyRoutes />
    </div>
    </BrowserRouter>
  );
}

export default App;
