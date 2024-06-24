import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Movie } from "../models/Movie";

export interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Card elevation={3}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>{movie.imdbRating}</Avatar>}
                title={movie.Title}
                subheader={movie.Released}
            />
            <CardMedia component="img" height="194" image={movie.Poster} alt={movie.Title} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {movie.Plot}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
