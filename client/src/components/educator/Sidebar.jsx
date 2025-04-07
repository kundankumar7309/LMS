import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: "Dashboard", path: "/educator/dashboard", icon: assets.home_icon },
    { name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
    { name: "My Courses", path: "/educator/my-courses", icon: assets.my_course_icon },
    { name: "Students Enrolled", path: "/educator/student-enrolled", icon: assets.person_tick_icon },
  ];

  return (
    isEducator && (
      <div className="flex flex-col w-16 min-h-screen py-4 text-base bg-gray-100 border-r border-gray-300 md:w-64">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === "/educator"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-3 md:px-4 md:py-2 hover:bg-gray-200 ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <p className="hidden md:block">{item.name}</p>
          </NavLink>
        ))}
      </div>
    )
  );
};

export default Sidebar;
