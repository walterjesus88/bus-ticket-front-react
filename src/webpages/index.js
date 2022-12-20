import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Navigate

} from "react-router-dom";
import Home from './home';
import User from './user';

const Webpages = () => {
    return(
        <Router>
        	<Routes>
        		<Route path="/" element={<Navigate to="/home" />} />        		
            <Route exact path ="/home"  element={<Home/>} />
        		<Route path = "/user/:id" element={<User/>} />
            
        	</Routes>           
        </Router>
    );
};
export default Webpages;