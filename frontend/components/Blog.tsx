import React from 'react'

function Blog() {
  return (
    <div className="bg-[#04080F] text-white mainContainer" id='blog'>
      <div>
      <h1 className="font-bold m-2 text-4xl">Blog</h1>
      <p className="text-lg m-2">we write for you</p>
      </div>
      <div className='grid grid-cols-1 min-[980px]:grid-cols-2 lg:grid-cols-3'>
      <div className="blogCard">
          <img className='w-full h-[200px] object-cover' src='./assets/images/blog-image.avif'></img>
          <div className='w-full flex flex-col p-5 '>
            <h1>Title #01</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officia accusantium? Ea, sint eos. Suscipit doloremque neque minus molestiae ea, laudantium id voluptatibus quaerat, nesciunt exercitationem veritatis unde.</p>
            <button className='button text-white'>Saiba mais</button>
          </div>
        </div>
        <div className="blogCard">
          <img className='w-full h-[200px] object-cover' src='./assets/images/blog-image2.avif'></img>
          <div className='w-full flex flex-col p-5 '>
            <h1>Title #02</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officia accusantium? Ea, sint eos. Suscipit doloremque neque minus molestiae ea, laudantium id voluptatibus quaerat, nesciunt exercitationem veritatis unde.</p>
            <button className='button text-white'>Saiba mais</button>
          </div>
        </div>
        <div className="hidden blogCard lg:block">
          <img className='w-full h-[200px] object-cover' src='./assets/images/blog-image3.avif'></img>
          <div className='w-full flex flex-col p-5 '>
            <h1>Title #03</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officia accusantium? Ea, sint eos. Suscipit doloremque neque minus molestiae ea, laudantium id voluptatibus quaerat, nesciunt exercitationem veritatis unde.</p>
            <button className='button text-white'>Saiba mais</button>
          </div>
        </div>
      </div>

      
    
    
    </div>
  )
}

export default Blog