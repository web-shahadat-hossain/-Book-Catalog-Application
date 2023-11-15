import { Fragment } from "react";
import { IBook } from "../types/booksType";
import { Link } from "react-router-dom";

interface CardProps {
  books: IBook[];
}

const Card: React.FC<CardProps> = ({ books }) => {
  console.log(books);
  return (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Publication Date
              </th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book: IBook, index) => (
             <Link key={index} to={`/book/${book?._id}`}>
              <tr  className="bg-white dark:bg-gray-800  cursor-pointer">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book?.title}
                </th>
                <td className="px-6 py-4">{book?.author}</td>
                <td className="px-6 py-4">{book?.genre}</td>
                <td className="px-6 py-4">{book?.publicationDate}</td>
              </tr>
             </Link>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Card;
