import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Movie } from "../models/Movie";

export interface MovieSearchProps {
    setMovieSearchResults: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const MovieSearch = ({ setMovieSearchResults }: MovieSearchProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        //TODO: keys moved
        const apiKey = "b7c06df8";
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

        try {
            //TODO: Model of response
            const response = await fetch(url);
            const data = await response.json();
            setMovieSearchResults(data.Search);
        } catch (error) {
            console.error("Error fetching data from OMDB API:", error);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 2,
            }}
            onSubmit={handleSearch}
        >
            <TextField
                id="search-bar"
                sx={{ marginRight: 2 }}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchQuery(e.target.value);
                }}
                label="Enter a movie name"
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
            <Button type="submit" variant="contained" disableElevation sx={{ height: "100%" }}>
                Search
            </Button>
        </Box>
    );
};

export default MovieSearch;
