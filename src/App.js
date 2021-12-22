import logo from './logo.svg';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Login from './components/Login';
import User from './components/User';
import Edituser from './components/Edituser';
import './App.css';
import PrivateRoute from './PrivateRoute';


function App() {


  const show =false;
  return (
    <div className="App">
      <Router>
    
      <Link to ="/Login" >Login</Link>
      <Link to = "/User">User</Link>
    
    
      
        <Route exact path="/Login" component={Login}/>
        <PrivateRoute  path="/User" component={User}/>
        <Route path = "/Edituser/:id" cmponent={Edituser}/>
      </Router>
    </div>
  );
}

export default App;
