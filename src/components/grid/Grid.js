import PropTypes from "prop-types";

//components
import Card from "../card/Card";

// styles
import "./Grid.css";

export default function Grid({ characters, isPending, error }) {
	return (
		<div className="container grid">
			{characters.map((character) => (
				<Card key={character.id} character={character} />
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
