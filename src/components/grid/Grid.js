import PropTypes from "prop-types";

//components
import Card from "../card/Card";

// styles
import "./Grid.css";

export default function Grid({ characters }) {
	return (
		<div className="container grid">
			{characters.map((character) => (
				<Card key={character.id} character={character} />
			))}
		</div>
	);
}

Grid.propTypes = {
	characters: PropTypes.array.isRequired,
};
