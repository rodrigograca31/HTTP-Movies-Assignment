import React from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const MovieCard = props => {
	const { title, director, metascore, stars } = props.movie;
	let { id } = useParams();

	return (
		<div className="movie-card">
			<Link to={`/update-movie/${id}`}>✏️</Link>
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>
			{stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}
		</div>
	);
};

export default MovieCard;
