import React from 'react';

interface RatingProps {
    rate: number;
    ratings: number;
}

const Rating: React.FC<RatingProps> = ({ rate, ratings }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < Math.floor(rate)) {
            return 'full';
        } else if (index < rate) {
            return 'half';
        } else {
            return 'empty';
        }
    });

    return (
        <div className="flex justify-start items-center gap-3">
            <div className="flex gap-[2px]">
                {stars.map((fill, index) => (
                    <Star fill={fill} key={index} />
                ))}
            </div>
            <small className="text-gray-500">{ratings}</small>
        </div>
    );
};

interface StarProps {
    fill: 'full' | 'half' | 'empty';
}

const Star: React.FC<StarProps> = ({ fill }) => (
    <div className="relative h-[14px] w-[14px] border rounded-full bg-gray-200 overflow-hidden z-1">
        {fill !== 'empty' && (
            <div
                className={`absolute top-0 left-0 h-full rounded-full ${
                    fill === 'full' ? 'w-full bg-green-700' : 'w-full bg-green-700'
                }`}
                style={fill === 'half' ? { clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' } : {}}
            ></div>
        )}
    </div>
);

export default Rating;
