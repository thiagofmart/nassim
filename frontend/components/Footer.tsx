import React from 'react'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { RiFacebookBoxLine } from 'react-icons/ri'

function Footer() {
  return (
    <footer className="bg-[#04080F] text-white mainContainer space-y-10 px-5 lg:px-0">
      <div className='flex justify-between'>
        <div>
          <h1>Serviços</h1>
          <ul>
            <li><a className='footerLinks' href="">SEO Avançado</a></li>
            <li><a className='footerLinks' href="">Design de websites</a></li>
            <li><a className='footerLinks' href="">Identidade Visual</a></li>
            <li><a className='footerLinks' href="">Apps e Sistemas</a></li>
            <li><a className='footerLinks' href="">Inbound Marketing</a></li>
            <li><a className='footerLinks' href="">Anúncios</a></li>
          </ul>
        </div>
        <div className="">
          <h1>Blog</h1>
          <ul>
            <li><a className='footerLinks' href="">Blog</a></li>
            <li><a className='footerLinks' href="">Blog</a></li>
            <li><a className='footerLinks' href="">Blog</a></li>
            <li><a className='footerLinks' href="">Blog</a></li>
            <li><a className='footerLinks' href="">Blog</a></li>
            <li><a className='footerLinks' href="">Blog</a></li>
          </ul>

        </div>
        <div className="w-[180px]">
          <h1 className='footer-slogan'>We create, your ideas.</h1>
        </div>
      </div>

      <div className="flex justify-between">
      <div className='text-lg'>Nassim © 2022</div>
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <a href=""><TbBrandInstagram className='globalIcon' /></a>
            <a href=""><TbBrandLinkedin className='globalIcon' /></a>
            <a href=""><RiFacebookBoxLine className='globalIcon' /></a>
            <a href=""><TbBrandWhatsapp className='globalIcon' /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer