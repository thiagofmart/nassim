import React from 'react'
import {useState, useEffect} from 'react'
const Header = () => {
  const [fixed, setFixed] = useState(false)

  function handleNavFixedOnOrOff(){
    if(scrollY > 0){
      setFixed(true)
    }else{
      setFixed(false)
    }
  }

  useEffect( ()=> {
    window.addEventListener('scroll', handleNavFixedOnOrOff)

    return () => {
      window.removeEventListener("scroll", handleNavFixedOnOrOff)
    }
  })

  return (



    <header className="h-auto mainContainer py-3">
      <div className={fixed ? 'fixed bg-black w-full' : 'block' }>

        <div className='flex justify-between'>
        <div className="flex">
          <a href="/"><img src="" className="px-3 navItems" alt="Nassim" /></a>
          <ul className="hidden md:flex space-x-4">
            <li className="navItems"><a className="navLinks" href="#servicos">Serviços</a></li>
            <li className="navItems"><a className="navLinks" href="">Sobre</a></li>
            <li className="navItems"><a className="navLinks" href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className='flex items-center'>
          <ul>
            <li className="navItems"><a className="navContact" href="">Contato</a></li>
          </ul>

        </div>
        </div>

      </div>
    </header>
  )
}

export default Header