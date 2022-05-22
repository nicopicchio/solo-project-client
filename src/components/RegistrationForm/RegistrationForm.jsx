import Logo from '../../../src/assets/continental-logo.jpg';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const emptyForm = {
	forename: '',
	surname: '',
	username: '',
	password: '',
	passwordConfirmation: '',
};
const registerUserRoute = 'http://localhost:5432/user/register';

function RegistrationForm() {
	const navigate = useNavigate();
	const [registrationData, setRegistrationData] = useState({ emptyForm });

	const onRegistrationFormChange = (event) => {
		const { name, value } = event.target;
		setRegistrationData({
			...registrationData,
			[name]: value,
		});
	};

	const registerUser = () => {
		if (registrationData.password === registrationData.passwordConfirmation) {
			axios
				.post(registerUserRoute, {
					forename: registrationData.forename,
					surname: registrationData.surname,
					username: registrationData.username,
					password: registrationData.password,
				})
				.then((res) => {
					if (res.status === 200) {
						navigate('/login');
					}
				})
				.catch((err) => {
					if (err.response.status === 500) {
						alert(err.response.data)
					}
				});
		}
	};

	const onRegistrationFormSubmit = (event) => {
		event.preventDefault();
		registerUser();
		setRegistrationData(emptyForm);
		event.target.reset();
	};

	return (
		<>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='300px' />
			</div>
			<h1>Register Account</h1>
			<form id='registration-form' onSubmit={onRegistrationFormSubmit}>
				<input
					onChange={onRegistrationFormChange}
					name='forename'
					type='text'
					placeholder='Forename'
					required
				/>
				<input
					onChange={onRegistrationFormChange}
					name='surname'
					type='text'
					placeholder='Surname'
					required
				/>
				<input
					onChange={onRegistrationFormChange}
					name='username'
					type='text'
					placeholder='Username'
					required
				/>
				<input
					onChange={onRegistrationFormChange}
					name='password'
					type='password'
					placeholder='Password'
					required
				/>
				<input
					onChange={onRegistrationFormChange}
					name='passwordConfirmation'
					type='password'
					placeholder='Confirm password'
					required
				/>
				<button type='submit'>Register</button>
			</form>
			<p>Already registered?</p>
			<Link to='/login' className='registration-login-links'>
				Login
			</Link>
		</>
	);
}

export default RegistrationForm;
