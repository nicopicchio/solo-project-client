import Logo from '../../src/assets/continental-logo.jpg';

function LoginForm() {
	const onFormChange = (event) => {
		console.log(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		console.log('form submitted');
	};

	return (
		<>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='300px' />
			</div>
			<form id='login-form'>
				<input
					onChange={onFormChange}
					name='username'
					type='text'
					placeholder='Username'
					required
				/>
				<input
					onChange={onFormChange}
					name='password'
					type='password'
					placeholder='Password'
					required
				/>
				<button onClick={onFormSubmit}>Login</button>
			</form>
		</>
	);
}

export default LoginForm;
