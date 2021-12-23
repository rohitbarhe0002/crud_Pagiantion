import logo from './logo.svg';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Login from './components/Login';
import User from './components/User';
import './App.css';
import PrivateRoute from './PrivateRoute';
import { AllUser } from './components/Edituser';


function App() {


  const show =false;
  return (
    <><div className="App">
     
     <Router>
    
      <Link to ="/Login" >Login</Link>
      <Link to = "/User">User</Link>
    
      
        <Route exact path="/Login" component={Login}/>

        <Route path="/AllUser/:id">
        <AllUser/>
        </Route>

        <PrivateRoute  path="/User" component={User}/>
       
      </Router>
    </div></>
  );
}

export default App;
