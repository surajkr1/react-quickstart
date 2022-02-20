import './App.css';
import logo from './logo.svg';
import { Link } from 'react';
import Parent from './components/Parent';
export default function App() {
  return (

    <div className="text" align="center">
      <h1>Aayansh Healthcare</h1>
      <div>
        <h1> 
          Choti tum bohot badmash ho.</h1>
      </div>

      <p>Your Health Is Our Priority</p>
      <Parent />
     
    </div>
    
  );
}
