import Logo from '../../src/assets/continental-logo.jpg';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const emptyForm = {
	forename: '',
	surname: '',
	username: '',
	password: '',
	passwordConfirmation: '',
};

function RegistrationForm() {
	// const navigate = useNavigate();
	const [registrationData, setRegistrationData] = useState({ emptyForm });

	const onRegitrationFormChange = (event) => {
		const { name, value } = event.target;
		setRegistrationData({
			...registrationData,
			[name]: value,
		});
	};

	const registerUser = () => {
		//TODO -> implement http request to register a user
	}

	const onRegistrationFormSubmit = (event) => {
		event.preventDefault();
		registerUser();
		setRegistrationData(emptyForm);
		event.target.reset();
		// navigate('/login');
	};

	return (
		<>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='250px' />
			</div>
			<h1>Register Account</h1>
			<form id='registration-form' onSubmit={onRegistrationFormSubmit}>
				<input
					onChange={onRegitrationFormChange}
					name='forename'
					type='text'
					placeholder='Forename'
					required
				/>
				<input
					onChange={onRegitrationFormChange}
					name='surname'
					type='text'
					placeholder='Surname'
					required
				/>
				<input
					onChange={onRegitrationFormChange}
					name='username'
					type='text'
					placeholder='Username'
					required
				/>
				<input
					onChange={onRegitrationFormChange}
					name='password'
					type='password'
					placeholder='Password'
					required
				/>
				<input
					onChange={onRegitrationFormChange}
					name='passwordConfirmation'
					type='password'
					placeholder='Confirm password'
					required
				/>
				<button type='submit'>Register</button>
			</form>
		</>
	);
}

export default RegistrationForm;
