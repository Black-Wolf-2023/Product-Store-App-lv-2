import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Items.css";
import Loading from "./Loading";

export const Items = (prop) => {
  const { data } = prop;
  let [cat, setCat] = useState({ options: [], status: false });

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((inform) => {
        setCat({ options: inform, status: true });
      });
  });

 function sender(e){
    prop.checker(e.target.innerText)
  }


  if (!cat.status) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="cat">
          {cat.options.map((e) => {
            if (e.id != 6) {
              return (
                <div className="content" key={e.id}>
                  <div className="title" onClick={sender}>{e.name}</div>
                </div>
              );
            }
          })}
        </div>
        <div className="container">
          {data.map((e) => {
            return (
              <div className="content" key={e.id}>
                <div className="img">
                  <img src={e.images[0]} alt={e.title} />
                </div>
                <div className="details">
                  <span>{e.title}</span>
                  <span>{e.price}$</span>
                </div>
                <div className="dis">{e.description}</div>
                <Link to="./Details" className="Link" state={{ data: e }}>
                  <button>Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};
