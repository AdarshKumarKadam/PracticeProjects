import { useState } from "react";
import devPic from "../assets/DevPic.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  const navbarHeight = 68; 

  return (
    <>
      <div className="max-w-screen-2xl container shadow-md mx-auto px-4 h-16 md:px-20 fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={devPic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-medium text-xl cursor-pointer">
              Adars<span className="text-green-500 text-2xl">h</span>
              <p className="text-sm">Software Developer</p>
            </h1>
          </div>
          <div className="flex items-center">
            <ul className="md:flex space-x-8 text-sm hidden">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer text-lg" key={id}>
                  <Link to={text.toLowerCase()} smooth={true} duration={500} offset={-navbarHeight}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden cursor-pointer text-2xl" onClick={() => setMenu(!menu)}>
              {menu ? <IoMdClose /> : <AiOutlineMenu />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="md:hidden bg-white">
            <ul className="space-y-4 text-sm flex flex-col items-center justify-center ">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer text-xl" key={id}>
                  <Link to={text.toLowerCase()} onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-navbarHeight} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
