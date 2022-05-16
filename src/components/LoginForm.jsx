import Logo from '../../src/assets/continental-logo.jpg';
import { useState } from 'react';

const emptyForm = {
	username: '',
	password: '',
}

function LoginForm() {
	const [loginData, setLoginData] = useState(emptyForm);

	const onLoginFormChange = (event) => {
		const { name, value } = event.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	const loginUser = () => {
		//TODO -> implement http request to log user in
	}

	const onLoginFormSubmit = (event) => {
		event.preventDefault();
		loginUser()
		setLoginData(emptyForm);
		event.target.reset()
	};

	return (
		<>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='300px' />
			</div>
			<form id='login-form' onSubmit={onLoginFormSubmit}>
				<input
					onChange={onLoginFormChange}
					name='username'
					type='text'
					placeholder='Username'
					required
				/>
				<input
					onChange={onLoginFormChange}
					name='password'
					type='password'
					placeholder='Password'
					required
				/>
				<button type='submit'>Login</button>
			</form>
		</>
	);
}

export default LoginForm;
