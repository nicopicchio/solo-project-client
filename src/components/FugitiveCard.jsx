import { useState, useEffect } from 'react';
import axios from 'axios';
const fbiFugitivesRequestRoute = 'http://localhost:5432/fugitives';

function FugitiveCard() {
	const [fugitivesList, setFugitivesList] = useState([]);

	useEffect(() => {
		axios
			.get(fbiFugitivesRequestRoute)
			.then((response) => {
				setFugitivesList(response.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			{fugitivesList.map((fugitive) => {
				return <p>{fugitive.name}</p>;
			})}
		</>
	);
}

export default FugitiveCard;
