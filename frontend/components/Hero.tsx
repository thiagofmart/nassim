import React from 'react'

function Hero() {
  return (
    <div className='mainContainer'>
    <div className="flex justify-between">
    <div className="text-white flex-1 justify-center flex flex-col px-10">
      <div className='w-full flex py-11 justify-center flex-col md:block md:py-0'>
        <h1 className="font-bold text-xl lg:text-3xl">We develop for human, not alien.</h1>
        <p className="text-lg mt-2">Change the world with your idea.</p>
        <button className="button">Conhecer</button>
      </div>

    </div>
    <div className="flex-1 md:block hidden">
      <img className="headerImage" src="./assets/domore-header.jpeg" alt="" />
    </div>
  </div>

    </div>

  )
}

export default Hero