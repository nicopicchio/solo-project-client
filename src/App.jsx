import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './components/Homepage';
import RegistrationForm from '../src/components/RegistrationForm';
import LoginForm from '../src/components/LoginForm';
import Dashboard from './components/Dashboard'

function App() {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/register' element={<RegistrationForm />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
