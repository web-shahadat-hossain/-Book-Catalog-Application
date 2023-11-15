/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const AddNewBook = () => {
      // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your logic for submitting the book data (e.g., API call, state management)
    console.log('Submitted Book:');
  };

    return (
        <Fragment>
            <Navbar/>
            <section>
            <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Book Information</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-600">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
       
         
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-600">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
          
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="publicationDate" className="block text-sm font-medium text-gray-600">
            Publication Date
          </label>
          <input
            type="text"
            id="publicationDate"
            name="publicationDate"
           
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
            </section>
            <Footer/>
        </Fragment>
    );
};

export default AddNewBook;