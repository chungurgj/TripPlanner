

const TopDestinations = () => {
  return (
    <div className='flex flex-col p-8 sm:p-14 justify-center items-center'>
        <div className='w-full md:w-[80%] flex flex-col gap-8'>
            <h2 className='text-2xl font-semibold'>Top destinations for your next vacation</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='destination'>Punta Cana, Dominican Republic</div>
                <div className='destination'>Grand Canyon, AZ</div>
                <div className='destination'>The Alps, Italy</div>
                <div className='destination'>Las Vegas, NV</div>
            </div>
        </div>
    </div>
  )
}

export default TopDestinations