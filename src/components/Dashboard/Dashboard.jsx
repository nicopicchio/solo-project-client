import '../Dashboard/Dashboard.css';
import Logo from '../../../src/assets/continental-logo.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FugitiveCard from '../FugitiveCard/FugitiveCard';

function Dashboard({ username, balance }) {
	const navigate = useNavigate();
	const [jobsAccepted, setJobsAccepted] = useState([])
	const [jobsCompleted, setJobsCompleted] = useState([])

	const signOut = () => {
		localStorage.clear();
		navigate('/login');
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
				</div>
				<div className='main-middle-container main-containers'>
					<h2 className='main-container-heading'>Jobs Available</h2>
					<div className='main-container-card'>
						<FugitiveCard />
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
