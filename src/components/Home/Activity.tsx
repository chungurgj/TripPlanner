import React, { useState } from 'react';
import Rating from './Rating';

interface ActivityProps {
    image: string;
    name: string;
    rate: number;
    ratings: number;
    category: string;
}

const Activity: React.FC<ActivityProps> = ({ image, name, rate, ratings, category }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className='activity-image flex justify-end items-start ' style={{ backgroundImage: `url(${image})` }}>
               <div className='p-1 bg-white rounded-full'>
                <svg
                    className={`h-10 w-10 p-2 hover:cursor-pointer ${isFavorited ? 'heart-favorited' : ''}`}
                    onClick={handleFavoriteClick}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="heart-outline"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        stroke="#000"
                        strokeWidth="2"
                    />
                    <path
                        className="heart-fill"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill={isFavorited ? 'red' : 'white'}
                    />
                </svg>
                </div>
            </div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <Rating rate={rate} ratings={ratings} />
            <small className="text-gray-500">{category}</small>
        </div>
    );
}

export default Activity;
