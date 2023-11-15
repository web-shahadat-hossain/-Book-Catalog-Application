import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const BookDetails = () => {
    return (
   <>
   <Navbar/>
    <section className="flex flex-col justify-center items-center h-screen">
   <div className="border border-[#ccc] rounded-md p-4 max-w-xs shadow-lg">
    <h3>Title: <span className="book-title">Your Title</span></h3>
    <p>Author: <span className="book-author">Your Author</span></p>
    <p>Genre: <span className="book-genre">Your Genre</span></p>
    <p>Publication Date: <span className="book-publication-date">Your Date</span></p>

    <div className="flex justify-between  mt-3">
      <button className="py-2 px-4 cursor-pointer rounded-md bg-[#3498db] text-white text-base" >Update</button>
      <button  className="py-2 px-4 cursor-pointer rounded-md bg-[#db3434] text-white text-base">Delete</button>
    </div>
  </div>   
    </section>
    <Footer/>
    </>
    );
};

export default BookDetails;