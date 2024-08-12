import { useState } from "react"
import { summerDestinations, weekendAdventures } from "../../data/HomeData"

const TravelInStyle = () => {
    const [selected,setSelected] = useState<number>(0)

    const items = ['Summer Destinations','Weekend Adventures']
    
    const columns:string[][] = [[],[],[],[]]
    {selected === 0 ?  (summerDestinations.forEach((destination,index)=>{
    columns[index%4].push(destination)
    })) : (weekendAdventures.forEach((destination,index)=>{
        columns[index%4].push(destination)
        }))}

  return (
    <div className="min-h-[300px] bg-white flex justify-center items-center py-14 md:p-14">
        <div className="w-[80%] flex flex-col gap-3">
            <h2 className="font-semibold text-3xl">Travel in Style with Trip Planner</h2>
            <ul className="flex gap-5 text-lg">
               {items.map((item,index)=>(
                <li key={index} onClick={()=>setSelected(index)} className={`p-1 hover:cursor-pointer ${selected===index ? 'travel-active' : ''}`}>{item}</li>
               ))}
            </ul>
            <div className="grid grid-cols-1 lg:grid-cols-4">
            {columns.map((column,colIndex)=>(
                <ul className="flex flex-col gap-1" key={colIndex}>
                    {column.map((destination,index)=>(
                        <li className="hover:cursor-pointer hover:underline hover:text-gray-600 text-sm" key={index}>{destination}</li>
                    ))}
                </ul>
            ))}
            </div>
        </div>
    </div>
  )
}

export default TravelInStyle