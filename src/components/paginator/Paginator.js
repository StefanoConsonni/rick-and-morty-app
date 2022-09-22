//styles
import "./Paginator.css";

export default function Paginator() {
	return (
		<div className="container paginator">
			<button>Prev</button>
			<p>
				Page <span>1</span> of 34
			</p>
			<button>Next</button>
		</div>
	);
}
