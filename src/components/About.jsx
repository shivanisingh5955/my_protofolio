import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            <p className="text-6xl mt-20">LET ME INTRODUCE MYSELF
            </p>
        </div>

            <br />

            <p className="text-xl">
            "I am an engineering student with a solid foundation in web development and programming, fueled by a passion for technology. Skilled in C++, C, Python, JavaScript, React, Next.js, HTML, CSS, and SQL, I excel in database management and creating responsive applications. Recently, I built a portfolio website using React.js and Tailwind CSS, reflecting my dedication to lifelong learning, teamwork, and crafting impactful solutions. 🚀"
            </p>
      </div>
    </div>
  )
}

export default About
