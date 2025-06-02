
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';


function App() {
  return (
    <BrowserRouter>
    <div>
     <Routes>
     
    </Routes>  
 <Home/>
 {/* <Login/> */}
 {/* <Register/> */}
   </div>
   </BrowserRouter>
  );
}

export default App;
