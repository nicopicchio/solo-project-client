import '../Dashboard/Dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import Logo from '../../../src/assets/continental-logo.jpg';
import FugitiveCard from '../FugitiveCard/FugitiveCard';
import FugitiveCardJobs from '../FugitiveCard/FugitiveCardJobs';

const fbiFugitivesRequestRoute = 'http://localhost:5432/fugitives';
const jobsAcceptedURL = 'http://localhost:5432/jobs/accept';

function Dashboard({ username, balance }) {
	const navigate = useNavigate();
	const [fugitivesList, setFugitivesList] = useState([]);
	const [jobsAccepted, setJobsAccepted] = useState([]);

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
				setFugitivesList(response.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		setJobsAccepted(fugitivesList.filter((fugitive) => fugitive.job));
	}, [fugitivesList]);

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
				setJobsAccepted([...jobsAccepted, fugitive])
			})
			.catch((err) => {
				console.error(err);
			});
	};

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
							<FugitiveCardJobs jobsAccepted={jobsAccepted} />
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
			<footer>
				<p className='footer-text'>
					made with ❤️ by{' '}
					<a
						className='footer-link'
						href='https://nicotech.dev'
						target='_blank'
						rel='noreferrer'>
						Nico
					</a>
				</p>
			</footer>
		</>
	);
}

export default Dashboard;
