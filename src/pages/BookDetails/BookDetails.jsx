import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ErrorPage from '../errorPage/ErrorPage';

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

    return (
        <div className='flex gap-10'>
            <div className='bg-gray-200 flex justify-center rounded-2xl md:rounded-3xl '>
                <img className='max-h-[15rem] md:max-h-[20rem] lg:max-h-[30rem] p-5 md:p-10 lg:p-15 min-w-[25rem]' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <p className='border-b-2 border-gray-200 py-3'>By : {author}</p>
                <p className='border-b-2 border-gray-200 py-3'>{category}</p>
                <p><span className='font-bold'>Review : </span>{review}</p>
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
                        <p className='font-bold py-1'>{rating}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookDetails;