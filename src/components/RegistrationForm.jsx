import Logo from '../../src/assets/continental-logo.jpg';

function RegistrationForm() {
	const onFormChange = (event) => {
		console.log(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		console.log('form submitted');
	}

	return (
		<>
			<div className='logo'>
				<img src={Logo} alt='continental main logo' width='250px' />
			</div>
			<h1>Register Account</h1>
			<form id='registration-form'>
				<input
					onChange={onFormChange}
					name='forename'
					type='text'
					placeholder='Forename'
					required
				/>
				<input
					onChange={onFormChange}
					name='surname'
					type='text'
					placeholder='Surname'
					required
				/>
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
				<input
					onChange={onFormChange}
					name='password'
					type='password'
					placeholder='Confirm password'
					required
				/>
				<button onClick={onFormSubmit}>Register</button>
			</form>
		</>
	);
}

export default RegistrationForm;
