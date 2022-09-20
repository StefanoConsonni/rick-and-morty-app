import Logo from "./logo.png";

// styles
import "./Header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<img src={Logo} alt="logo of Rick and Morty" />
			</div>
		</div>
	);
}
