import React from 'react'

function Blog() {
  return (
    <div className="w-full max-w-[1200px] m-auto bg-[#04080F] text-white">
      <h1 className="font-bold m-2">Blog</h1>
      <p className="text-sm m-2">we write for you</p>

      <div className="h-auto grid grid-cols-1 md:grid-cols-3 flex-wrap p-6">
        <div className="blogCard">
          Some TEXT
        </div>
        <div className="blogCard">
          Some TEXT
        </div>
        <div className="blogCard">
          Some TEXT
        </div>
      </div>
      
    
    
    </div>
  )
}

export default Blog