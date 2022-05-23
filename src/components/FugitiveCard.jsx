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
			{fugitivesList.map((fugitive, index) => {
				return <p key={index}>{fugitive.name}</p>;
			})}
		</>
	);
}

export default FugitiveCard;
