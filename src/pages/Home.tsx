import Card from "../components/Card";
import { useAllBooksGetQuery } from "../redux/api/apiSlice";

const Home = () => {

  const {data, isLoading}= useAllBooksGetQuery(undefined);

  console.log(isLoading);
  const booksData = data && data.data ? [...data.data].reverse().slice(0, 10) : [];
  return (
    <>
      <section className="max-w-[1200px] mx-auto   my-24">
        <Card books={booksData} />
      </section>
    </>
  );
};

export default Home;
