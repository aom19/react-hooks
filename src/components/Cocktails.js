import axios from "../apis/cocktailsAPI";
import useAxios from "../hooks/useAxios";

const Cocktails = () => {
  const [data, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {},
    },
  });

  return <> {!loading && !error && data && <p>{console.log(data)}</p>} </>;
};

export default Cocktails;
