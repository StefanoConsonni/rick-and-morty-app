import PropTypes from "prop-types";

// styles
import "./Card.css";

export default function Card({ character, isSelected, toggleFavourite }) {
	const selectedClass = isSelected ? "selected" : "";

	return (
		<div className={`card ${selectedClass}`}>
			<img src={character.image} alt={character.name} />
			<div className="card-info">
				<p className="card-info__name">
					<span>Name:</span>
					{character.name}
				</p>
				<p className="card-info__details">
					{character.species}
					<span>from</span>
					{character.location.name}
				</p>
			</div>
			<button className="favourite" onClick={() => toggleFavourite(character.id, isSelected)}>
				{isSelected ? "Remove" : "Add"}
			</button>
		</div>
	);
}

Card.propTypes = {
	character: PropTypes.object.isRequired,
	isSelected: PropTypes.bool.isRequired,
	toggleFavourite: PropTypes.func.isRequired,
};
