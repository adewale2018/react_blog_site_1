import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Login", path: "/login" },
];

function Navigation() {
  return (
    <nav className='site-navigation'>
      <span>DEVPRO Blog</span>
      <ul>
        {navLinks.map((link, key) => (
          <li key={key}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
