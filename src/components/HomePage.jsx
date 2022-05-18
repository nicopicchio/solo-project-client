import { Link } from 'react-router-dom';
import Logo from '../../src/assets/continental-logo.jpg';

function HomePage() {
	return (
		<>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='600px' />
			</div>
			<Link to='/register' className='links'>
				Register
			</Link>
			<Link to='/login' className='links'>
				Login
			</Link>
		</>
	);
}

export default HomePage;
