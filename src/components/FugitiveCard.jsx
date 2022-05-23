import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
				return (
					<div key={index} className='fugitive-card'>
						<div className='profile-picture-container'>
							<img
								className='fugitive-avatar'
								src={fugitive.images[0].original}
								alt='fugitive avatar'
								width='100px'
								height='100px'
							/>
						</div>
						<div className='profile-name-container'>
							<a className='fugitive-name-link' target='_blank' href={fugitive.url}>
								{fugitive.name}
							</a>
						</div>
						<div className='profile-warning-container'>
							<h4 className='fugitive-warning'>{fugitive.warning}</h4>
						</div>
						<div className='profile-reward-text-container'>
							<p className='fugitive-reward-text'>{fugitive.reward}</p>
						</div>
            <div className='profile-reward-amount-container'>
              <h2 className='profile-reward-amount-text'>Reward</h2>
            </div>
						<div className='profile-btn-container'>
							<button className='fugitive-accept-job-btn'>Accept Job</button>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default FugitiveCard;
