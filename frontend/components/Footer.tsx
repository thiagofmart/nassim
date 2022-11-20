import React from 'react'

function Footer() {
  return (
    <div className="block w-full max-w-[1200px] m-auto bg-[#04080F] text-white">
      <div className="float-left">
        <h1>Serviços</h1>
        <ul>
            <li><a href="">SEO Avançado</a></li>
            <li><a href="">Design de websites</a></li>
            <li><a href="">Identidade Visual</a></li>
            <li><a href="">Apps e Sistemas</a></li>
            <li><a href="">Inbound Marketing</a></li>
            <li><a href="">Anúncios</a></li>
        </ul>
      </div>
      <div className="float-left">
        <h1>Blog</h1>
        <ul>
            <li><a href="">Blog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Blog</a></li>
        </ul>
      </div>
      <div className="float-right">
        <h1>We create, your ideas.</h1>
      </div>
    </div>
  )
}

export default Footer