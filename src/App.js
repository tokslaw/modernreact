import './App.css';
import Contact from './Pages/Contact';
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h4>route</h4>
      </div>
      <Route path="/contact" component={Contact} />
    </Router>
  );
}
<Contact />
export default App;
