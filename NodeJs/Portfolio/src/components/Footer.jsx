import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa" 


function Footer() {
  return (
<>
<hr />
<footer className="pt-0">
<div className='max-w-screen-2xl container pb-0 pt-10 pb-10 mx-auto px-4 md:px-20 '>
  <div className="flex flex-col items-center justify-center">
    <div className=" flex space-x-6">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800" />
                    </a>
                    <a href="https://www.linkedin.com/in/kadam-adarsh" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
                    </a>
    </div>
    <div className="mt-8 border-t border-gray-500 pt-8 flex flex-col items-center ">
      <p className="text-sm">
        &copy; 2024 cool. All rights reserved.
      </p>
      <p className="text-sm mt-3">
        Supportive partner ❤️ Adarsh
      </p>
    </div>
  </div>
</div>
</footer>
</>
  )
}

export default Footer
