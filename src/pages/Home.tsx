import { Fragment } from "react";
import CardTable from "../components/CardTable";

const Home = () => {
  return (
    <Fragment>
      <section className="max-w-[1200px] mx-auto min-h-[75vh] mt-6">
        <h2 className="text-center text-2xl font-bold mb-3">New Collections</h2>
        <CardTable />
      </section>
    </Fragment>
  );
};

export default Home;
