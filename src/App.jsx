import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Homepage from './components/Homepage/Homepage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard'

function App() {
	const navigate = useNavigate();
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

	useEffect(() => { 
		const token = localStorage.getItem('jwt')
		if (token) {
			setIsUserLoggedIn(true)
		} else navigate('/login')
	}, [navigate])

	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/register' element={<RegistrationForm />} />
				<Route path='/login' element={<LoginForm setIsUserLoggedIn={setIsUserLoggedIn} />} />
				<Route path='/dashboard' element={isUserLoggedIn && <Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
