// import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

// components
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import Paginator from "./components/paginator/Paginator";

// styles
import "./App.css";

function App() {
	const url = "https://rickandmortyapi.com/api/character/?page=3";
	const { data: characters, isPending, error } = useFetch(url);

	return (
		<div className="App">
			<Header />
			<Grid characters={characters} isPending={isPending} error={error} />
			<Paginator />
		</div>
	);
}

export default App;
