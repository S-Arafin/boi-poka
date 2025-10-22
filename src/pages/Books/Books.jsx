import React, { Suspense, useEffect, useState } from 'react';
import Loading from '../loadingPage/Loading';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(()=>{
    //     fetch("/booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAllBooks(data)
    //     })

    // },[])
    // const bookPromise = fetch("/booksData.json").then(res=>res.json)
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<Loading></Loading>}>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                     {
                    data.map((book)=><Book key={book.bookId} book={book}></Book>)
                }
                </div>
               
            </Suspense>
        </div>
    );
};

export default Books;