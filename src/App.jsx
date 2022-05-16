import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import RegistrationForm from '../src/components/RegistrationForm';
import LoginForm from '../src/components/LoginForm';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<RegistrationForm />} />
				<Route path='/login' element={<LoginForm />} />
			</Routes>
		</>
	);
}

export default App;
