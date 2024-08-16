

const NavbarProfileContainer  = () => {

  return (
    <div className='min-h-[270px] w-[220px]  bg-gray-100 shadow-lg absolute top-[110%] right-0 p-6 rounded-xl flex justify-center items-center h-full'>
        <div className="flex justify-evenly items-center flex-col h-full">
          <div>
            <h1>Gjorgji Chungurski</h1>
            <p className="underline">gjorgji@chungurski.mk</p>
          </div>
            <ul className="flex justify-center items-center flex-col w-full gap-1">
              <li className="p-2 bg-emerald-400 w-full rounded cursor-pointer">Your trips</li>
              <li className="p-2 bg-sky-400 w-full rounded cursor-pointer">Account</li>
              <li className="p-2 bg-rose-500 w-full rounded cursor-pointer">Log out</li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarProfileContainer