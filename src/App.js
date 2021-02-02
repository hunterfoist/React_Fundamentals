import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import NameProp from './components/challenges/day01/NameProp'
import Contacts from './components/challenges/day01/Contacts'
import State from './components/challenges/day01/State'
import Header from './components/challenges/day01/Header'
import Footer from './components/challenges/day01/Footer'
import Sidebar from './components/challenges/day01/Sidebar'

import {
  BrowserRouter as Router,
} from 'react-router-dom';


function App() {
  
  
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer/>
    </div>
    
  );
}

export default App;
