import PropTypes from "prop-types";

//styles
import "./Paginator.css";

export default function Paginator({ currentPage, totalApiPages, onChange }) {
	const onClickPrev = () => {
		const targetPage = currentPage - 1;
		if (targetPage > 0) {
			onChange(targetPage);
		}
	};

	const onClickNext = () => {
		const targetPage = currentPage + 1;
		if (targetPage <= totalApiPages) {
			onChange(targetPage);
		}
	};

	return (
		<div className="container paginator">
			<button onClick={onClickPrev}>Prev</button>
			<p>
				Page <span>{currentPage}</span> of {totalApiPages}
			</p>
			<button onClick={onClickNext}>Next</button>
		</div>
	);
}

Paginator.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalApiPages: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};
