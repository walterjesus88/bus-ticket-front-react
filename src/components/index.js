import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
//import './App.css';
import Dashboard from './Dashboard/Dashboard';



// export default function App() {
//   const [token, setToken] = useState();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }

//   return (
//     <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/preferences">
//             <Preferences />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

const Components = () => {
    return(
        <Router>
        	<Routes>                
                <Route exact path ="/dashboard"  element={<Dashboard/>} />        
        	</Routes>           
        </Router>
    );
};
export default Components;