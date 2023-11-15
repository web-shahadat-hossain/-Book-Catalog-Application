import Card from "../components/Card";
import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAllBooksGetQuery } from "../redux/api/apiSlice";

const AllBooks = () => {
  const auth = getAuth();
  const {data, isLoading}= useAllBooksGetQuery(undefined);

  console.log(isLoading);
  const booksData = data && data.data ? [...data.data].reverse() : [];



  const startYear = 1900;
const endYear = 2024;
const yearsArray = [];

for (let year = startYear; year <= endYear; year++) {
  yearsArray.push(year);
}


const movieGenres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Mystery",
  "Thriller",
  "Animation",
  "Documentary",
  "Crime",
  "Family",
  "Musical",
  "War",
  "Western",
  "Historical",
  "Biography",
];

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log(user);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  return (
    <Fragment>
      <Navbar />
      <section className="max-w-[1200px] mx-auto   my-24">
      <div className="flex justify-between items-center mb-10">
        <div className="w-[50%]">
       
          <form>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>

        </div>
        <div className="flex gap-10">
          <div>
            
<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Publication Year</option>
 {
  yearsArray.map((year, i)=><option value={year} key={i}>{year}</option>)
 }
  
</select>

          </div>
          <div>
            
<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choice a Genres</option>
 {
  movieGenres.map((genres, i)=><option value={genres} key={i}>{genres}</option>)
 }
  
</select>

          </div>
        </div>
      </div>
        <Card books={booksData} />
      </section>
      <Footer />
    </Fragment>
  );
};

export default AllBooks;
