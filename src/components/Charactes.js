import React from "react";
import axios from "../apis/characters";
import useAxios from "../hooks/useAxios";

const Charactes = () => {
  const [data, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        // "Content-Language": "en-US",
        //'Accept': 'text/html'
      },
    },
  });

  return (
    <>
      {data.map((hero) => {
        return <li key={hero.char_id}> {hero.name}</li>;
      })}
    </>
  );
};

export default Charactes;
