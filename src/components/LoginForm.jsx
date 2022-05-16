function LoginForm() {
	return (
		<form id='login-form'>
			<input name='username' type='text' placeholder='Username' required />
			<input name='password' type='password' placeholder='Password' required />
			<button>Login</button>
		</form>
	);
}

export default LoginForm;
