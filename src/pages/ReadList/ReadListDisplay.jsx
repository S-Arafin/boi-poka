import React from 'react';
import { IoIosStarHalf } from "react-icons/io";
import { ImBin } from "react-icons/im";

const ReadListDisplay = ({ book }) => {
    const { bookName, author, image, review, rating, category } = book
    const tags = book.tags;
    return (
        <div className='flex'>
            <div className="flex gap-10 shadow-sm p-5 rounded-xl ">
                <figure className=' bg-gray-100 rounded-xl w-40 p-4'>
                    <img
                        className='max-h-[10rem] py-1 mx-auto'
                        src={image}
                        alt="" />
                </figure>
                <div className="w-90">
                    
                    <h1 className="text-3xl pb-3">
                        {bookName}

                    </h1>
                    <div className='flex gap-5 pb-4'>
                        {
                            tags.map((tag, index) => {

                                return <div key={index}

                                    className="badge badge-soft badge-success">{tag}

                                </div>

                            })
                        }

                    </div>
                    <p className='pb-5'> By : {author}</p>
                    <div className="flex justify-between border-t-2 border-dashed border-gray-200 pt-2">
                        <div className="font-bold ">{category}</div>
                        <div className="flex items-center gap-2 font-bold">{rating}<IoIosStarHalf /></div>
                    </div>
                </div>
                <div>
                    <ImBin />
                </div>

            </div>
            
        </div>
    );
};

export default ReadListDisplay;