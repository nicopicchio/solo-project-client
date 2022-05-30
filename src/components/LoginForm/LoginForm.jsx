import Logo from '../../../src/assets/continental-logo.jpg';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const emptyForm = {
	username: '',
	password: '',
};
const loginUserRoute = `${env.process.HEROKU_SERVER_URL}/user/login`;

function LoginForm({ setIsUserLoggedIn, setUsername, setBalance }) {
	const navigate = useNavigate();
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
			.then((res) => {
				if (res.status === 200) {
					setUsername(res.data[1].username);
					setBalance(res.data[1].balance);
					setIsUserLoggedIn(true);
					navigate('/dashboard');
					localStorage.setItem('jwt', res.data[0]);
					localStorage.setItem('username', res.data[1].username);
				}
			})
			.catch((err) => {
				if (err.response) {
					alert(err.response.data);
				}
			});
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
			<p>Not registered yet?</p>
			<Link to='/register' className='registration-login-links'>
				Register
			</Link>
		</>
	);
}

export default LoginForm;
