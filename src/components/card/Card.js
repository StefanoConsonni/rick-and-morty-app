import Character from "./Character";

// styles
import "./Card.css";

export default function Card() {
	return (
		<div className="card">
			<img src={Character.image} alt={Character.name} />
			<div className="card-info">
				<p className="card-info__name">
					<span>Name:</span>
					{Character.name}
				</p>
				<p className="card-info__details">
					{Character.species} <span>from</span> {Character.location.name}
				</p>
			</div>
		</div>
	);
}
