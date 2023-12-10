import pic from '../assets/ai-head.png'

const Hero = () => {
  return (
   <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src = {pic} alt = 'LA-logo' className='w-16 object-contain' />
      {/* <p className='blue_gradient text-xl'>Aradhya</p> */}
      <button type='button' onClick={()=> window.open('https://aradhya3d.com')} className='black_btn'>
        My 3D Portfolio
      </button>

    </nav>

<h1 className='head_text'>
 Article Summarizer
</h1>
<h2 className='desc'>
  Paste URL of an article and get a summerized version.
</h2>
   </header>



  )
}

export default Hero