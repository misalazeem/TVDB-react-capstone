import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <>
      <nav>
        <h2>Discover Tv Shows</h2>
        <h2 className="extra-header">TV database</h2>
        <ul>
          <li>
            <IoSettingsOutline />
          </li>
          <li>
            <FaMicrophone />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
