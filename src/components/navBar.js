import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-purple-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex ">
          <NavLink
            to="/"
            exact={true}
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-300 text-4xl font-bold cursive tracking-widest"
          >
            Varun's Blog
          </NavLink>
          <NavLink
            to="/"
            exact={true}
            activeClassName="text-red"
            className="inline-flex items-center py-3 px-3 mr-4 text-cyan-100 hover:text-blue-300 text-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/Post"
            exact={true}
            activeClassName="text-red"
            className="inline-flex items-center py-3 px-3 mr-4 text-cyan-100 hover:text-blue-300 text-bold cursive tracking-widest"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/Project"
            exact={true}
            activeClassName="text-red"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-300  font-bold cursive tracking-widest"
          >
            Projects
          </NavLink>
          <NavLink
            to="/About"
            exact={true}
            activeClassName="text-red"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-300 font-bold cursive tracking-widest"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://linkedin.com/in/varunherlekar"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/varun.herlekar.9"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/varunherlekar"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com/the_geekynerd"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://varunherlekar.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
