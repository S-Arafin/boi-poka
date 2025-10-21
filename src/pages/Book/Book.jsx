
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";


const Book = ({ book }) => {
    // console.log(book)
    const {bookId, bookName, author, image, review, rating, category} = book
    const tags = book.tags;
    
    return (
        <Link to={`/bookDetails/${bookId}`}><div className='relative group overflow-hidden'>
            <div className="card bg-base-100 max-w-96 max-h-98 shadow-sm p-5 mx-auto">
                <figure className=' bg-gray-100 w-3/3 mx-auto  p-4'>
                    <img 
                        className='max-h-[10rem] py-1'
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-5'>
                        {
                            tags.map((tag, index)=>{ 
                            
                            return<div key={index}
                            
                            className="badge badge-soft badge-success">{tag}
                            
                            </div>

                            })
                        }
                        
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        
                    </h2>
                    <p>By : {author}</p>
                    <div className="card-actions justify-between border-t-2 border-dashed border-gray-200 pt-2">
                        <div className="font-bold ">{category}</div>
                        <div className="flex items-center gap-2 font-bold">{rating}<IoIosStarHalf /></div>
                    </div>
                </div>
            </div>
            <div className='absolute inset-0 bg-white/90 flex items-center justify-center scale-y-0 origin-top group-hover:scale-y-100 transition-all duration-400 ease-in-out'>
            <h1 className='text-center text-sm p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200'>{review}</h1>

            </div>
        </div></Link>
        
    );
};

export default Book;