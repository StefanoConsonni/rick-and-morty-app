// styles
import "./Searchbox.css";

export default function Searchbox() {
	return (
		<div className="container searchbox">
			<input type="text" placeholder="Search" />
			<button>{">"}</button>
		</div>
	);
}
