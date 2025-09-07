import { useEffect, useState}from 'react';
import "./row.css";
import axios from '../../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-YouTube'

const Row = ({title,fetchUrl,isLargeRow}) => {
  const[movies,setMovie] = useState([]);
  const[trailerUrl, setTrailerUrl] = useState("");
  const base_url ="https://image.tmdb.org/t/p/original";

  useEffect(()=>{
    (async ()=>{
      try{
        console.log("fetchUrl:", fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log( "fetched movies:", request)
         console.log("response data:", request.data);
         console.log("results", request.data.results);
        setMovie(request.data.results);
      } catch (error){
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
const handleClick =(movie) =>{
  if (trailerUrl){
    setTrailerUrl('')
  } else{
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
    .then((url)=>{
      console.log(url);
      const urlparams = new URLSearchParams(new URL(url).search)
      console.log(urlparams);
      console.log(urlparams.get('v'));
      setTrailerUrl(urlparams.get('v'));
    })
  }
}
const opts ={
  hight: '390',
  width: "50%",
  playerVars:{
    autoplay: 1,
  },
}

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className='row__posters'>
{movies?.map((movie) => (
  <img
  onClick={()=> handleClick(movie)}
  key={movie.id} src={`${base_url}${isLargeRow ?
    movie.poster_path : movie.backdrop_path
  }`}
  alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
  />
))}
      </div>
      <div style={{padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

      </div>
      
    </div>
  )
}

export default Row;
