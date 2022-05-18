import Logo from '../../src/assets/continental-logo.jpg';
import { useState } from 'react';
import axios from 'axios'

const emptyForm = {
	username: '',
	password: '',
};
const loginUserRoute = 'http://localhost:4000/user/login';

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
		axios
			.post(loginUserRoute, {
				username: loginData.username,
				password: loginData.password,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const onLoginFormSubmit = (event) => {
		event.preventDefault();
		loginUser();
		setLoginData(emptyForm);
		event.target.reset();
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
