import Card from "../components/Card";
import { useState, Fragment, useEffect } from "react";

const Home = () => {
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
      <section className="max-w-[1200px] mx-auto   my-24">
        <Card books={books?.slice(0, 10)} />
      </section>
    </Fragment>
  );
};

export default Home;
