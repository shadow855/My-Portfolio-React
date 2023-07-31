
import './App.css';
import { Cursor } from './Components/Cursor';
import { Home } from './Components/Home';
import { Qualifications } from './Components/Qualifications';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Navbar } from './Components/Navbar';
import './Css Folder/scrollbar.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Footer } from './Components/Footer';


function App() {
  return (
    <>
      <Cursor />
      <Router>
        <Navbar />
        <Routes>
          {/* Set the default route to redirect to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />}>
          </Route>
          <Route exact path="/qualifications" element={<Qualifications />}>
          </Route>
          <Route exact path="/projects" element={<Projects />}>
          </Route>
          <Route exact path="/contact" element={<Contact />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
