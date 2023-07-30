import { Fragment } from "react";
import CardTable from "../components/CardTable";

const Home = () => {
  return (
    <Fragment>
      <section className="max-w-[1200px] mx-auto min-h-[75vh]">
        <CardTable />
      </section>
    </Fragment>
  );
};

export default Home;
