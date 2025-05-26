import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <div name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">Hi, I am Shivani Singh 👋</h2>
             {/* <p className="text-1.5xl text-gray-500 py-4 max-w-md"> I specialize in crafting 
              <span style="color:yellow">end-to-end</span> solutions that resonate with users, turning ideas into products they <span class="text-green-500">genuinely love ❤️</span>.</p> */}
               {/* Typed.js element */}
          <div className="text-2xl text-gray-500 py-4 max-w-md">
            <ReactTyped
              strings={["I specialize in web development.", "I craft end-to-end solutions.", "Turning ideas into products. ❤️"]}
              typeSpeed={60} // Speed of typing
              backSpeed={40} // Speed of deleting
              backDelay={1000} // Delay before starting to delete
              loop // Keeps looping through the strings
            />
          </div>
            <div>
                <Link 
                to="portfolio" 
                smooth 
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25} className="ml-1" /></span>
                </Link>
            </div>
        </div>

        <div>
            <img src={heroImage} 
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  )
}

export default Home
