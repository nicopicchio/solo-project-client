import Logo from '../../src/assets/continental-logo.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const emptyForm = {
	forename: '',
	surname: '',
	username: '',
	password: '',
	passwordConfirmation: '',
};
const registerUserRoute = 'http://localhost:4000/user/register';

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
		axios
			.post(registerUserRoute, {
				forename: registrationData.forename,
				surname: registrationData.surname,
				username: registrationData.username,
				password: registrationData.password,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const onRegistrationFormSubmit = (event) => {
		event.preventDefault();
		registerUser();
		setRegistrationData(emptyForm);
		event.target.reset();
		navigate('/login');
	};

	return (
		<>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='250px' />
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
		</>
	);
}

export default RegistrationForm;
