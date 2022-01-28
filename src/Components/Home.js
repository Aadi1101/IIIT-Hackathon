import React from "react";
//import Sidebar from "./Sidebar";
import { useHistory } from "react-router";

export default function Home() {

  const history = useHistory();
  return (
    <div>
      <div className="banner">
        <h1><b>Welcome!</b></h1>
        <p><b>Are you hungry?</b></p>
        <button onClick={()=>history.push("/products")}   className="standalone"> Search a Meal </button>
      </div>
    </div>
  );
}
