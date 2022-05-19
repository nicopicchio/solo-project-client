import '../Dashboard/Dashboard.css';
import Logo from '../../../src/assets/continental-logo.jpg';

function Dashboard() {
	return (
		<>
			<header>
				<img src={Logo} alt='continental hotel logo' width='230px' />
				<div className='dashboard-title-container'>
					<h2 className='dashboard-heading'>userLogged's Dashboard</h2>
					<h2 className='dashboard-heading'>Available Balance: $ 3,000</h2>
				</div>
				<button id='logout-button'>Logout</button>
			</header>
			<main>
				<div className='main-left-container main-containers'>
          <h2 className='main-container-heading'>Targets Accepted</h2>
        </div>
				<div className='main-middle-container main-containers'>
          <h2 className='main-container-heading'>Fugitives</h2>
        </div>
        <div className='main-right-container main-containers'>
          <h2 className='main-container-heading'>Targets Captured</h2>
        </div>
			</main>
		</>
	);
}

export default Dashboard;