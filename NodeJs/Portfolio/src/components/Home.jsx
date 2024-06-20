import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {ReactTyped} from "react-typed";
import DevPic from "../assets/dev.png"

const Home = () => {
  return (
    <>
      <div id='home' className='max-w-screen-2xl container  pt-20 pb-10 mx-auto px-4 md:px-20 overflow-hidden'>
        <div className='flex flex-col md:flex-row'>
          <div name="left" className=" md:w-1/2 order-2 md:order-1  md:mt-20 text-sm">
            <span className="text-xl block">Welcome to my feed</span>
            <div className="flex flex-wrap items-center space-x-1 text-2xl my-2 md:text-4xl">
              <h1>Hello, I'm a </h1>&nbsp;
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I have studied at CDAC ACTS, Pune, where I gained proficiency in various technologies including Java, JavaScript, Node.js, and Express.js.
I have completed several projects, such as an Online Book Store utilizing Java Spring Boot and MySQL for the backend, and React with Axios for the frontend.
Currently, I am working on developing General POS software using the MERN stack.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col md:flex-row justify-between mt-4  items-center space-y-6 md:space-y-0">
              <div>
                <p className="text-md text-center md:text-left">Available on</p>
                <div className="flex space-x-5 cursor-pointer text-2xl mt-3 md:mt-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
                    <SiTelegram />
                  </a>
                </div>
              </div>
              <div className="mt-3 md:mt-0">
                <p className="text-md text-center md:text-left">Currently working on</p>
                <div className="flex space-x-5 cursor-pointer text-2xl mt-2 md:mt-3">
                  <FaReact />
                  <SiExpress />
                  <FaNodeJs />
                  <GrMysql />
                </div>
              </div>
            </div>
          </div>
          <div name="right" className="md:w-1/2 order-1">
            <img src={DevPic} className="md:ml-16" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;