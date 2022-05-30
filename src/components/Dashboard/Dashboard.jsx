import '../Dashboard/Dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../../../src/assets/continental-logo.jpg';
import FugitiveCard from '../FugitiveCard/FugitiveCard';
import JobsList from '../JobList/JobsList';
import JobsCompletedList from '../JobList/JobCompletedList';

const fbiFugitivesRequestRoute = `${process.env.HEROKU_SERVER_URL}/fugitives`;
const jobsAcceptedURL = `${process.env.HEROKU_SERVER_URL}/jobs/accept`;
const markAsCompletedURL = `${process.env.HEROKU_SERVER_URL}/jobs/complete`;

function Dashboard({ username, balance, setBalance }) {
	const navigate = useNavigate();
	const [fugitivesList, setFugitivesList] = useState([]);

	const jobsAccepted = fugitivesList.filter((fugitive) => {
		return fugitive.job && !fugitive.job.completed;
	});

	const jobsCompleted = fugitivesList.filter((fugitive) => {
		return fugitive.job && fugitive.job.completed;
	});

	useEffect(() => {
		let total = 0;
		if (!jobsCompleted) return;
		for (const job of jobsCompleted) {
			total += job.balance;
		}
		const balanceFormatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		});

		const formattedBalance = balanceFormatter.format(total);
		setBalance(formattedBalance);
	}, [jobsCompleted, setBalance]);

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

	const addJobHandler = (job) => {
		axios
			.post(
				jobsAcceptedURL,
				{
					uid: job.uid,
				},
				{
					headers: {
						authorization: `Bearer ${localStorage.getItem('jwt')}`,
					},
				}
			)
			.then((response) => {
				const fugitivesCopy = fugitivesList.map((fugitive) => {
					if (fugitive.uid === job.uid) {
						const fugitiveCopy = { ...fugitive };
						fugitiveCopy.job = response.data.jobAdded;
						return fugitiveCopy;
					}
					return fugitive;
				});
				setFugitivesList(fugitivesCopy);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const completeJobHandler = (job) => {
		axios
			.post(
				markAsCompletedURL,
				{
					uid: job.uid,
				},
				{
					headers: {
						authorization: `Bearer ${localStorage.getItem('jwt')}`,
					},
				}
			)
			.then((response) => {
				const fugitivesCopy = fugitivesList.map((fugitive) => {
					if (fugitive.uid === job.uid) {
						const fugitiveCopy = { ...fugitive };
						fugitiveCopy.job = response.data.jobCompleted;
						return fugitiveCopy;
					}
					return fugitive;
				});
				setFugitivesList(fugitivesCopy);
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
					<h2 className='dashboard-heading'>
						Balance: <span className='balance'>{balance}</span>
					</h2>
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
							<JobsList
								jobsAccepted={jobsAccepted}
								completeJobHandler={completeJobHandler}
							/>
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
					<div className='jobs-accepted-container'>
						<ul>
							<JobsCompletedList jobsCompleted={jobsCompleted} />
						</ul>
					</div>
				</div>
			</main>
			<footer>
				<p className='footer-text'>
					made by{' '}
					<a
						className='footer-link'
						href='https://nicotech.dev'
						target='_blank'
						rel='noreferrer'>
						Nico
					</a>{' '}
					with ❤️
				</p>
			</footer>
		</>
	);
}

export default Dashboard;
