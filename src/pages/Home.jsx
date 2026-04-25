import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {initialCoffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
      ))}
    </div>
  );
};

export default Home;
