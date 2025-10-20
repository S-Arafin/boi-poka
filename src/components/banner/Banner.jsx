import React, { useEffect, useState } from 'react';
import ErrorPage from '../../pages/errorPage/ErrorPage';

const Banner = () => {
    const [slideData, setSlideData] = useState([]);
    const [current, setCurrent] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/bannerData.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setSlideData(data))
            .catch((error) => {
                console.error("Failed to fetch banner data:", error);
                setError(error);
            });
    }, []);

    useEffect(() => {
        if (slideData.length === 0) {
            return;
        }

        const timer = setInterval(() => {
            setCurrent((prevCurrent) => {
                return prevCurrent === slideData.length - 1 ? 0 : prevCurrent + 1;
            });
        }, 3000);

        return () => clearInterval(timer);

    }, [slideData.length]);

    if (error) {
        return <ErrorPage error={error} />;
    }

    if (slideData.length === 0) {
        return <div className="p-16 text-center">Loading...</div>;
    }

    return (
        <div className='flex justify-between items-center p-16 mx-auto bg-gray-200 rounded-3xl my-10 relative overflow-hidden'>
            <div>
                <div className="relative min-h-[160px]">
                    {slideData.map((slide, index) => {
                        return (
                            <h1
                                key={slide.id || slide.bookId} 
                                className={`
                                    font-bold text-3xl md:text-5xl
                                    absolute w-[20rem]
                                    top-0 left-0
                                    transition-opacity duration-1000 ease-in-out
                                    ${index === current ? 'opacity-100' : 'opacity-0'}
                                `}
                            >
                                {slide.review}
                            </h1>
                        );
                    })}
                </div>

                <button className='btn btn-success text-white my-5'>View Book List</button>
            </div>

            <div className='max-w-2xl relative min-w-[15rem] min-h-[200px] '>
                {slideData.map((slide, index) => {
                    return (
                        <img
                            key={slide.id}
                            className={`h-[20rem]
                                w-full
                                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                transition-opacity duration-1000 ease-in-out
                                ${index === current ? 'opacity-100' : 'opacity-0'}
                            `}
                            src={slide.image}
                            alt="Book Cover"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Banner;