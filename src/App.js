// Import necessary components and hooks
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Readonlychecklist from "./components/Read/Read";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";

function App() {
  // Retrieve the 'userid' from the Redux store
  const userid = useSelector(store => store.user.userid);

  return (
    // Set up the router
    <Router>
      <Routes>
        {/* Define the route for the login/signup page */}
        <Route exact path="/" element={<Login/>}/>
        
        {/* Define protected routes that require the user to be logged in (i.e., have a userid).
            If the user is not logged in, redirect to the login/signup page. */}
        <Route path="/board" element={userid ? <Home/> : <Navigate replace to="/"/>}/>
        <Route path="/analytics" element={userid ? <Home/> : <Navigate replace to="/"/>}/>
        <Route path="/settings" element={userid ? <Home/> : <Navigate replace to="/"/>}/>
        
        {/* Define the route for the readonly checklist page, accessible regardless of login status */}
        <Route path="/readonlychecklist/:id" element={<Readonlychecklist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
