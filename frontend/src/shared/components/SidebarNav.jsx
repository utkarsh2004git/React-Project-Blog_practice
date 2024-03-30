
// const SidebarNav=()=>{
//     return(
//         <div className="sidebar">
//         <ul>
//           <li>Home</li>
//           <li>User List </li>
//           <li>Create User </li>
//           <li>Posts </li>
//           <li>Create Post </li>
//           <li>Logout</li>
//         </ul>
//       </div>
//     )
// }

// export default SidebarNav;


import { Link } from "react-router-dom";

const SidebarNav=()=>{
  const menuitems=[
    {title:'Home',to :"/"},
    {title:"User List ",to :"/users"},
    {title:  "Create User ",to :"/create"},
    {title:  "Posts ",to :"/post"},
    {title:  "Create Post ",to :"/createPost"},
    {title:  "Logout", to :"/logout"}
  ];
    return(<div className="font-bold text-white bg-violet-800 w-48 h-screen ">
        <ul>{
        menuitems.map(item=>(
          <li key={item.title} className="">
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))
        }</ul>
    </div>
    );
}

export default SidebarNav;