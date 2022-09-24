import { useState } from "react";
import PropTypes from "prop-types";

// styles
import "./Searchbox.css";

export default function Searchbox({ onSubmit }) {
	const [searchKey, setSeachKey] = useState("");

	return (
		<div className="container searchbox">
			<input type="text" placeholder="Search" onChange={(e) => setSeachKey(e.target.value)} />
			<button onClick={() => onSubmit(searchKey)}>{">"}</button>
		</div>
	);
}

Searchbox.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
