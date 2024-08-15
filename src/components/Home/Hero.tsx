import ActivityRow from "./ActivityRow"
import { items, activities } from "../../data/HeroData"
import { useState } from "react"
import Search from '../../img/search.png'

const Hero = () => {
    const [activeItem, setActiveItem] = useState<number>(0)

    return (
        <div className='flex flex-col justify-evenly items-center gap-10 md:gap-24 min-h-[2050px] py-10 md:py-24'>
            <div className="flex flex-col justify-between items-center min-h-[230px]  w-full">
                <h1 className='text-5xl font-bold md:block hidden'>Where to?</h1>
                <div className="flex flex-col gap-5 hero-group ">
                    <div className="overflow-x-auto w-full">
                        <ul className='flex gap-8 w-max'>
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className={`hero-component flex justify-center items-center gap-2  ${activeItem === index ? 'hero-active-component' : ''} whitespace-nowrap`}
                                    onClick={() => setActiveItem(index)}>
                                    <img src={item.img} className="w-6 h-6" />
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="input-container w-full px-3">
                        <div className="flex justify-center w-full items-center">
                            <img src={Search} className="w-6 h-6" />
                            <input type="text" className="p-3 border-b md:border-b-0 w-full" placeholder="Places to go, things to do, hotels..." />
                        </div>
                        <button className="px-5 py-3 bg-green-400 rounded-full w-full md:w-min">Search</button>
                    </div>
                </div>
            </div>
            <div className="landscape flex flex-col items-start justify-end p-8 gap-4">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-semibold">Explore jaw-dropping landscapes!</h1>
                    <p>Just save your favorites and visit them.</p>
                </div>
                <button className="bg-white px-5 py-2 text-black rounded-full">Enter now</button>
            </div>
            <div className="flex flex-col w-[85%] sm:w-[70%] gap-5">
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-xl font-semibold">Go on an award-winning adventure</h3>
                    <p>2024’s Travelers’ Choice Awards Best of the Best Things To Do</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    <div className="hero-small-image">Top Attractions</div>
                    <div className="hero-small-image">Top Experiences</div>
                    <div className="hero-small-image">Bucket List</div>
                    <div className="hero-small-image">Cultural and Historic</div>
                </div>
                <ActivityRow activities={activities.slice(0, 4)} rowTitle="You might like these"
                    rowSubtitle="Things to do in Barcelona" />
                <ActivityRow activities={activities.slice(4, 8)} rowTitle="Top experiences" rowSubtitle="" />
            </div>
        </div>
    )
}

export default Hero
