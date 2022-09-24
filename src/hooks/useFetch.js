import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [totalApiPages, setTotalApiPages] = useState(1);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsPending(true);

			try {
				const res = await fetch(url);

				if (!res.ok) {
					throw new Error(res.statusText);
				}

				const data = await res.json();
				setIsPending(false);
				setData(data.results);
				setTotalApiPages(data.info.pages);
				setError(null);
			} catch (err) {
				console.log(err);
				setIsPending(false);
				setError("Could not fetch the data");
			}
		};

		fetchData();
	}, [url]);

	return { data, totalApiPages, isPending, error };
};
