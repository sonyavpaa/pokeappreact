import React from "react";
import { Link, Outlet } from "react-router-dom";

const PokeList = () => {
  return (
    <div>
      PokeList is here!
      <Link to="pokesingle">Click for PokeSingle!</Link>
      <Outlet />
    </div>
  );
};

export default PokeList;
