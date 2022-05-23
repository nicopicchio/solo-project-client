import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Homepage from './components/Homepage/Homepage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';

const initialBalance = 0;

function App() {
	const navigate = useNavigate();
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [balance, setBalance] = useState(initialBalance);

	useEffect(() => {
		const token = localStorage.getItem('jwt');
		const username = localStorage.getItem('username');
		if (token || token !== undefined) {
			setIsUserLoggedIn(true);
			setUsername(username);
		} else navigate('/login');
	}, [navigate]);

	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/register' element={<RegistrationForm />} />
				<Route
					path='/login'
					element={
						<LoginForm
							setIsUserLoggedIn={setIsUserLoggedIn}
							setUsername={setUsername}
							setBalance={setBalance}
						/>
					}
				/>
				<Route
					path='/dashboard'
					element={
						isUserLoggedIn && (
							<Dashboard username={username} balance={balance} />
						)
					}
				/>
			</Routes>
		</>
	);
}

export default App;
