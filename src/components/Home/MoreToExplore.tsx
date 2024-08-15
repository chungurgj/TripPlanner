import Explore1 from '../../img/explore1.avif'
import Explore2 from '../../img/explore2.jpg'
import Explore3 from '../../img/explore3.jpg'

const MoreToExplore = () => {
  return (
    <div className='min-h-[350px] w-full bg-explore flex justify-center items-center p-8 sm:p-14'>
        <div className='flex justify-start items-start w-full md:w-[80%] flex-col gap-8 '>
            <h2 className='text-2xl font-semibold'>More to explore</h2>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='col-span-1 flex flex-col justify-center items-center gap-3'>
                    <img src={Explore1} className='rounded-xl h-[220px] w-full object-cover' />
                    <p className='font-semibold text-lg text-gray-700'>stunning desert views and fun activites</p>
                </div>
                <div className='col-span-1 flex flex-col justify-center items-center gap-3'>
                    <img src={Explore2} className='rounded-xl h-[220px] w-full object-cover'  />
                    <p className='font-semibold text-lg text-gray-700'>How to visit Hawaii?</p>
                </div>
                <div className='col-span-1 flex flex-col justify-center items-center gap-3'>
                    <img src={Explore3} className='rounded-xl h-[220px] w-full object-cover'  />
                    <p className='font-semibold text-lg text-gray-700'>Top Taj Mahal tour guide</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoreToExplore