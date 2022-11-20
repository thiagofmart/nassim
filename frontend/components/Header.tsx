import React from 'react'

const Header = () => {
  return (
    <header className="w-full max-w-[1200px] m-auto h-auto">
      <div className="flex p-5">
        <img src="" className="px-3 navItems" alt="Nassim" height="70px"/>
        <ul className="hidden md:flex space-x-4">
          <li className="navItems"><a className="navLinks" href="">Inicio</a></li>
          <li className="navItems"><a className="navLinks" href="">Sobre</a></li>
          <li className="navItems"><a className="navLinks" href="">Serviços</a></li>
          <li className="navItems"><a className="navLinks" href="">Contato</a></li>
        </ul>
      </div>
      <div className="flex justify-between">
        <div className="text-white flex-1 justify-center items-center flex flex-col space-y-3">
          <h1 className="font-bold text-lg">We develop for human, not alien.</h1>
          <p className="text-sm">Change the world with your idea.</p>
          <button className="py-[0.15rem] px-2 rounded-md bg-[#D33F49]">Start Now</button>
        </div>
        <div className="flex-1 md:block hidden">
          <img className="headerImage" src="./assets/domore-header.jpeg" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header