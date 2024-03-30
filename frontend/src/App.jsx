import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./home/pages/Home";
import Login from "./admin/users/pages/Login";
import UserList from "./admin/users/pages/UserList";
import SidebarNav from "./shared/components/SidebarNav"
const App=()=>{
  return(
    <div className="flex">
    <Router>
      <SidebarNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;