import React from 'react'
import Activity from './Activity';

interface ActivityProps {
    image: string;
    name: string;
    rate: number;
    ratings: number;
    category: string;
}

interface ActivityRowProps{
    activities:ActivityProps[],
    rowTitle:string,
    rowSubtitle:string
}

const ActivityRow : React.FC<ActivityRowProps> = ({activities,rowTitle,rowSubtitle}) =>{

    return (<div className="flex flex-col gap-5">
        <div className="flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold">{rowTitle}</h3>
            <p>{rowSubtitle}</p>
        </div>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            {activities.map((activity : ActivityProps, index : number) => (
                <Activity key={index} image={activity.image} name={activity.name} rate={activity.rate} 
                ratings={activity.ratings} category={activity.category}  />
            ))}
    </div>
    </div>)
}



export default ActivityRow