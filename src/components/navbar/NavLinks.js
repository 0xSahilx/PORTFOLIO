import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <Link
          to="https://twitter.com/pareShan_zal?t=rc1urpCZ45cWZl8_J5HsLg&s=08"
          target="_blank"
          className="nav-link"
        >
          <FaTwitter />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="https://www.linkedin.com/in/shanzal-siddiqui-17a25b24a/"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="https://github.com/0xSahilx"
          target="_blank"
          className="nav-link"
        >
          <BsGithub />
        </Link>
      </li>
      {/* <li onClick={handleNav} ><Link  to="//www.instagram.com/pjp_concepts" target='_blank' className='nav-link'><FaInstagram /></Link></li> */}
      <li onClick={handleNav}>
        <Link
          to="mailto:sahilaryan9211@gmail.com"
          target="_blank"
          className="nav-link"
        >
          <BiEnvelope />
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
