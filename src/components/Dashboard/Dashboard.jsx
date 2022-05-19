import '../Dashboard/Dashboard.css';
import Logo from '../../../src/assets/continental-logo.jpg';

function Dashboard() {
	return (
		<>
			<header>
				<img src={Logo} alt='continental hotel logo' width='230px' />
				<div className='dashboard-title-container'>
					<h2 id='dashboard-title'>userLogged's Dashboard</h2>
					<h2 id='dashboard-balance'>Available Balance: $ 3,000</h2>
				</div>
				<button id='logout-button'>Logout</button>
			</header>
			<main>
				<div className='main-left-container'></div>
				<div className='main-middle-container'></div>
        <div className='main-right-container'></div>
			</main>
		</>
	);
}

export default Dashboard;