import { useState } from "react";
import PropTypes from "prop-types";

//components
import Card from "../card/Card";

// styles
import "./Grid.css";

export default function Grid({ characters, isPending, error }) {
	const [favourites, setFavourites] = useState([]);

	const toggleFavourite = (id, isSelected) => {
		let newFavourites = [...favourites];

		if (!isSelected) {
			newFavourites.push(id);
		} else {
			newFavourites = newFavourites.filter((selectedId) => selectedId !== id);
		}
		setFavourites(newFavourites);
	};

	return (
		<div className="container grid">
			{characters.map((character) => (
				<Card key={character.id} character={character} isSelected={favourites.includes(character.id)} toggleFavourite={toggleFavourite} />
			))}
			{isPending && (
				<div className="loading">
					<p>Loading...</p>
				</div>
			)}
			{error && (
				<div className="error">
					<p>{error}</p>
				</div>
			)}
		</div>
	);
}

Grid.propTypes = {
	characters: PropTypes.array.isRequired,
	isPending: PropTypes.bool.isRequired,
	error: PropTypes.string,
};
