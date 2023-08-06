import Card from "../components/Card";
import { useState, Fragment, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data?.books);
      });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <section className="max-w-[1200px] mx-auto   my-24">
        <Card books={books} />
      </section>
      <Footer />
    </Fragment>
  );
};

export default AllBooks;
