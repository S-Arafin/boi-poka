import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb';
import Book from '../Book/Book';
import ReadListDisplay from './ReadListDisplay';


const ReadList = () => {
    const data = useLoaderData();
    const [readList , setReadList] = useState([])

    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    },[])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Books List</Tab>
                    <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>read books {readList.length}</h2>
                    {
                        readList.map(b=><ReadListDisplay key={b.bookId} book={b}></ReadListDisplay>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;