import React from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const isEducator = useNavigate();
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 py-4 border-b border-gray-500 
        sm:px-10 md:px-14 lg:px-36 
        ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}
    >
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="cursor-pointer w-28 lg:w-32"
      />

      {/* Desktop Navigation Links */}
      <div className="items-center hidden gap-5 text-gray-500 sm:flex">
        {user && (
          <>
            <button  onClick={() => navigate('/educator')}
            className="hover:underline">{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
            <Link to="/my-enrollments" className="hover:underline">
              My Enrollments
            </Link>
          </>
        )}

        {/* Create Account Button */}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="px-5 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation (Only Icon Visible) */}
      <div className="flex items-center gap-2 text-gray-500 sm:hidden">
        {user ? (
          <UserButton />
        ) : (
          <button onClick={openSignIn}>
            <img src={assets.user_icon} alt="User Icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
