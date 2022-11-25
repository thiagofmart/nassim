
import {useState} from 'react'

function Contact() {
  const [inputLength, setInputLength] = useState(0);


  return (
    <div className="bg-white">
      <div className='mainContainer '>
        <h1>Vamos conversar?</h1>
        <button className='button text-white'>Contato</button>
      </div>
    </div>

  )
}

export default Contact