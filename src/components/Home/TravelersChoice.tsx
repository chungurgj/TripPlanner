import Image from '../../img/travelersChoice.webp'
import Logo from '../../img/logo.png'

const TravelersChoice = () => {
  return (
    // <div className='lg:min-h-[600px] bg-travelersChoice w-full p-24 gap-10 md:gap-0 flex flex-col md:flex-row travelersChoice justify-start items-center  sm:items-start '>
     
    //     <div className='flex flex-col gap-3 justify-start items-start '>
    //         <img src={Logo} className='w-24 h-24' />
    //         <h1 className='font-ultra text-5xl'>Travelers' Choice<br/> Awards Best of <br/>the Best</h1>
    //         <p className='text-lg'>Among our top 1% of places, stays,<br/> eats, and experiences—decided by<br/> you.</p>
    //         <button className='px-4 py-3 text-white bg-black rounded-full'>See the winners</button>
            
    //     </div>
    //     <img src={Image} className='hidden md:flex travelersChoiceImg rounded-xl ' />
 
    // </div>

    <div className='bg-travelersChoice w-full min-h-[600px] grid grid-cols-1 md:grid-cols-2'>

        <div className='flex justify-start items-start md:justify-center md:items-center col-span-1 lg:p-24 p-10'>
          <div className='flex flex-col gap-3 justify-start items-start'>
             <img src={Logo} className='w-24 h-24' />
             <h1 className='font-ultra text-5xl'>Travelers' Choice<br/> Awards Best of <br/>the Best</h1>
             <p className='text-lg'>Among our top 1% of places, stays,<br/> eats, and experiences—decided by<br/> you.</p>
             <button className='px-4 py-3 text-white bg-black rounded-full'>See the winners</button> 
             </div>  
         </div>
         <div className='col-span-1 flex justify-center items-center p-8 sm:py-14 sm:px-14 lg:px-20'>
            <img src={Image} className='object-cover rounded-xl' alt="" />
         </div>
    </div>
  )
}

export default TravelersChoice