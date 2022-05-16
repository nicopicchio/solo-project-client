import './App.css';
import Logo from '../src/assets/continental-logo.jpg';

function App() {
	return (
		<div id='main-container'>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='400px' />
			</div>
			<p className='links'>Register</p>
			<p className='links'>Login</p>
		</div>
	);
}

export default App;
