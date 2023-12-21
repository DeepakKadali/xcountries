import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      {data &&
        data.map((country) => {
          return (
            <div className="country">
              <img
                className="image"
                src={country.flags.png}
                alt={country.name.common}
              />
              <h3>{country.name.common}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default App;
