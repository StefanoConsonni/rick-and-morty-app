import { useMemo, useState } from "react";
import { useFetch } from "./hooks/useFetch";

// components
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import Paginator from "./components/paginator/Paginator";
import Searchbox from "./components/searchbox/Searchbox";

// styles
import "./App.css";

function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchKey, setSeachKey] = useState("");

	const url = useMemo(() => {
		const newUrl = new URL("https://rickandmortyapi.com/api/character/");
		const params = {
			page: currentPage,
			name: searchKey,
		};
		Object.keys(params).forEach((key) => {
			newUrl.searchParams.append(key, params[key]);
		});
		return newUrl;
	}, [currentPage, searchKey]);

	const { data: characters, totalApiPages, isPending, error } = useFetch(url);

	const onPaginatorChange = (targetPage) => {
		setCurrentPage(targetPage);
	};

	const onSubmitSearch = (searchKey) => {
		setSeachKey(searchKey);
	};

	return (
		<div className="App">
			<Header />
			<Searchbox onSubmit={onSubmitSearch} />
			<Grid characters={characters} isPending={isPending} error={error} />
			<Paginator currentPage={currentPage} totalApiPages={totalApiPages} onChange={onPaginatorChange} />
		</div>
	);
}

export default App;
