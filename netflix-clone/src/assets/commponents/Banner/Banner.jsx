
import { useEffect, useState } from "react";
import axios from "../../../utils/axios.jsx";
import requests from "../../../utils/requests.jsx"; // <-- your requests.js file
import "./banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals
      );
      // Pick a random movie from results
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1  )
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // helper function to truncate description
  function abrivat(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* Title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* Buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* Description */}
        <h1 className="banner_description">{abrivat(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
