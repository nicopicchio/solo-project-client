import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/continental-logo.jpg';
import '../Homepage/Homepage.css';

function Homepage() {
	return (
		<div className='homepage-container'>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='550px' />
			</div>
			<Link to='/register' className='links'>
				Register
			</Link>
			<Link to='/login' className='links'>
				Login
			</Link>
		</div>
	);
}

export default Homepage;
