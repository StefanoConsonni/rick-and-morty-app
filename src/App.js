// import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

// components
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";

// styles
import "./App.css";

function App() {
	const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6";
	const { data: characters, isPending, error } = useFetch(url, { type: "GET" });

	return (
		<div className="App">
			<Header />
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			<Grid characters={characters} />
		</div>
	);
}

export default App;
