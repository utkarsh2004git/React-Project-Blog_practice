import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./home/pages/Home";
import Login from "./admin/users/pages/Login";
import UserList from "./admin/users/pages/UserList";
import Sidebar from "./shared/components/Sidebar"
const App=()=>{
  return(
    <div>
      <Sidebar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/users" element={<UserList />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;