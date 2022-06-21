import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/
export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios
        .request({
          method: "GET",
          url: "/register.php",
          params: {
            login: "testUser1",
            name: "Jacek",
            surname: "Kowalski",
            email: "jacek@wp.pl",
            password: "jack123",
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(JSON.stringify(response));
        });
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []); // execute once only

  return { response, error, loading };
};
