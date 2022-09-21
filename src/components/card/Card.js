import PropTypes from "prop-types";

// styles
import "./Card.css";

export default function Card({ character }) {
	return (
		<div className="card">
			<img src={character.image} alt={character.name} />
			<div className="card-info">
				<p className="card-info__name">
					<span>Name:</span>
					{character.name}
				</p>
				<p className="card-info__details">
					{character.species} <span>from</span> {character.location.name}
				</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	character: PropTypes.object.isRequired,
};
