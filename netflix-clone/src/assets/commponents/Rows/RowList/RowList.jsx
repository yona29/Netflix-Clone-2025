import React from 'react'
import "./rowlist.css"
import Row from "../../../commponents/Rows/Row/Row.jsx"
import requests from '../../../../utils/requests.jsx'
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
       <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
         <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList
  