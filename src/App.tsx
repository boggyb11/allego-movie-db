import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieSearch from "./components/MovieSearch";
import { Movie } from "./models/Movie";

const jsonData = `{ "Title": "The Shawshank Redemption", "Year": "1994", "Rated": "R", "Released": "14 Oct 1994", "Runtime": "142 min", "Genre": "Drama", "Director": "Frank Darabont", "Writer": "Stephen King, Frank Darabont", "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton", "Plot": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.", "Language": "English", "Country": "United States", "Awards": "Nominated for 7 Oscars. 21 wins & 42 nominations total", "Poster": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "9.3/10" }, { "Source": "Rotten Tomatoes", "Value": "89%" }, { "Source": "Metacritic", "Value": "82/100" }], "Metascore": "82", "imdbRating": "9.3", "imdbVotes": "2,907,297", "imdbID": "tt0111161", "Type": "movie", "DVD": "N/A", "BoxOffice": "$28,767,189", "Production": "N/A", "Website": "N/A", "Response": "True" }`;

function App() {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [movieSearchResults, setMovieSearchResults] = useState<Movie[]>([]);

    const handleAddMove = (movie: Movie) => {
        setMovieList((previous) => [...previous, movie]);
    };

    useEffect(() => {
        setMovieList([JSON.parse(jsonData)]);
    }, []);

    return (
        <div className="App">
            <MovieSearch setMovieSearchResults={setMovieSearchResults} />
            {movieSearchResults.length > 0 && <h2>Results:</h2>}
            <Grid container spacing={2} sx={{ margin: 1 }}>
                {movieSearchResults?.map((movie, i) => (
                    <Grid item sm={2} key={i} sx={{ minWidth: 300 }}>
                        <MovieCard movie={movie} />
                        <Button onClick={() => handleAddMove(movie)}>Add</Button>
                    </Grid>
                ))}
            </Grid>

            <h2>My List</h2>
            <Grid container spacing={2} sx={{ padding: 2, margin: 1 }}>
                {movieList?.map((movie, i) => (
                    <Grid item sm={2} key={i} sx={{ minWidth: 300 }}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default App;
