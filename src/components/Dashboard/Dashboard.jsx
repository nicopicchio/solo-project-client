import '../Dashboard/Dashboard.css';
import Logo from '../../../src/assets/continental-logo.jpg';
import { useNavigate } from 'react-router-dom';
import FugitiveCard from '../FugitiveCard/FugitiveCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const fbiFugitivesRequestRoute = 'http://localhost:5432/fugitives';
const jobsAcceptedURL = 'http://localhost:5432/jobs/accept';

function Dashboard({ username, balance }) {
	const navigate = useNavigate();
	const [fugitivesList, setFugitivesList] = useState([]);

	const signOut = () => {
		localStorage.clear();
		navigate('/login');
	};

	useEffect(() => {
		axios
			.get(fbiFugitivesRequestRoute, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('jwt')}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				setFugitivesList(response.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const addJobHandler = (fugitive) => {
		axios
			.post(
				jobsAcceptedURL,
				{
					uid: fugitive.uid,
				},
				{
					headers: {
						authorization: `Bearer ${localStorage.getItem('jwt')}`,
					},
				}
			)
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const jobsAccepted = fugitivesList.filter(fugitive => (fugitive.job))

	return (
		<>
			<header>
				<img
					src={Logo}
					alt='continental hotel logo'
					width='230px'
					id='logo-top-left'
				/>
				<div className='dashboard-title-container'>
					<h2 className='dashboard-heading'>{username}'s dashboard</h2>
					<h2 className='dashboard-heading'>Balance: ${balance}</h2>
				</div>
				<button id='logout-button' onClick={signOut}>
					Logout
				</button>
			</header>
			<main>
				<div className='main-left-container main-containers'>
					<h2 className='main-container-heading'>Jobs Accepted</h2>
					<div className='jobs-accepted-container'>
						<ul>
							{jobsAccepted.map((fugitive) => {
								return (
									<>
										<li>{fugitive.name}</li>
									</>
								);
							})}
						</ul>
					</div>
				</div>
				<div className='main-middle-container main-containers'>
					<h2 className='main-container-heading'>Jobs Available</h2>
					<div className='main-container-card'>
						<FugitiveCard
							fugitivesList={fugitivesList}
							setFugitivesList={setFugitivesList}
							addJobHandler={addJobHandler}
						/>
					</div>
				</div>
				<div className='main-right-container main-containers'>
					<h2 className='main-container-heading'>Jobs Completed</h2>
				</div>
			</main>
		</>
	);
}

export default Dashboard;
