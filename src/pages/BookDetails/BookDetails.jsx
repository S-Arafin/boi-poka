import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ErrorPage from '../errorPage/ErrorPage';
import { addToStoredDb } from '../../utility/addToDb';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const books = data.find((book) => book.bookId === parseInt(id))
    if (!books) {
        return (
            <ErrorPage></ErrorPage>
        );
    }
    const tags = books.tags;
    const { bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing } = books;
    const handleMarkAsRead = id =>{
        const added = addToStoredDb(id);
        if (added){
            
            toast.error("You have already read this book")
        }
        else{
            toast.success("Book added to read list")
        }
    }

    return (
        <div className='flex flex-col md:flex-row gap-10  py-12 px-3 md:px-1'>
            <div className='bg-gray-200 max-h-[15rem] md:max-h-[20rem] lg:max-h-[30rem] flex justify-center rounded-xl md:rounded-2xl '>
                <img className='max-h-[15rem] md:max-h-[20rem] lg:max-h-[30rem] py-4 md:py-9 lg:py-14 px-6 md:px-11 lg:px-16 max-w-[15rem] md:max-w-[20rem] lg:max-w-[30rem]' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <p className='border-b-2 border-gray-200 py-3'>By : {author}</p>
                <p className='border-b-2 border-gray-200 py-3'>{category}</p>
                <p className='py-3'><span className='font-bold'>Review : </span>{review}</p>
                <p className='border-b-2 border-gray-200 py-3'><span className='font-bold '>tag : </span>
                    {
                        tags.map((tag, index) => {
                            return <span className="badge badge-soft badge-success mr-2" key={index}>{tag}</span>
                        }

                        )
                    }

                </p>
                <div className='flex items-start gap-20 py-3'>
                    <div>
                        <p className='text-gray-500 py-1'>Number of Pages:</p>
                        <p className='text-gray-500 py-1'>Publisher:</p>
                        <p className='text-gray-500 py-1'>Year of Publishing:</p>
                        <p className='text-gray-500' py-1>Ratings</p>
                    </div>
                    <div>
                        <p className='font-bold py-1'>{totalPages}</p>
                        <p className='font-bold py-1'>{publisher}</p>
                        <p className='font-bold py-1'>{yearOfPublishing}</p>
                        <p className='font-bold py-1'>{rating} </p>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <button onClick={()=>handleMarkAsRead(id)} className='btn'>Mark as read</button>
                    <button className='btn btn-info text-white'>Add to wishlist</button>
                </div>



            </div>
            <ToastContainer/>
        </div>
    );
};

export default BookDetails;