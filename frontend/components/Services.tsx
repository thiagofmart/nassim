import React from 'react'
import { TbTarget, TbDeviceDesktop, TbPencil, TbDeviceMobile, TbReportSearch, TbTimeline } from "react-icons/tb";


function Services() {
  return (
    <div className=" bg-white" id='servicos'>
      
      <div className="h-auto grid grid-cols-1 min-[980px]:grid-cols-2 lg:grid-cols-4 flex-wrap mainContainer">
        <div  className="serviceCard lg:col-span-2 flex justify-center items-center">
          <div className='text-center'>
          <h1 className='text-4xl'>Serviços</h1>
          <p className='text-lg'>Saiba quais são os nosso principais serviços.</p>
          </div>

        </div>
        <div className="serviceCard">
          <TbReportSearch className='globalIcon'/>

          <h1>SEO Avançado</h1>
          <p>Otimização de sites com foco em posicionamento da busca orgânica do Google. Apareça na primeira página do Google sem pagar por clique.</p>
        </div>
        <div className="serviceCard">
        <TbDeviceDesktop className='globalIcon'/>

          <h1>Design de Sites</h1>
          <p>Criação e Redesign de sites institucionais, Ecommerces, blogs, portais. Tenha um site com foco em conversão de clientes e adaptado para todos os dispositivos.</p>
        </div>
        <div className="serviceCard">
          <TbPencil className='globalIcon'/>
          <h1>Identidade Visual</h1>
          <p>Elaboração de identidade visual em materiais, redes sociais, site, logotipo, midia kits, materiais impressos, etc. Fortaleça a sua marca com a padronização de design.</p>
        </div>
        <div className="serviceCard">
          <TbDeviceMobile className='globalIcon'/>
          <h1>Apps e Sistemas</h1>
          <p>Desenvolvimento de sistemas, integrações ou aplicações para diversas aplicações e áreas. Crie as mais complexas soluções de forma simples e rápida.</p>
        </div>
        <div className="serviceCard">
          <TbTimeline className='globalIcon'/>
          <h1>Inbound Marketing</h1>
          <p>Trabalho de reeducação de leads e captação. Criação de jornada de compra e automação de marketing. Desperte o desejo de seu produto ou serviço através de conteúdo.</p>
        </div>
        <div className="serviceCard">
        <TbTarget className='globalIcon'/>
          <h1>Anúncios do Google</h1>
          <p>Desenvolvimento e gerenciamento de campanhas no Google Ads, Google Shopping, Google Maps, Remarketing e Display. Apareça sempre para o seu público.</p>
        </div>
      </div>
    </div>
  )
}

export default Services