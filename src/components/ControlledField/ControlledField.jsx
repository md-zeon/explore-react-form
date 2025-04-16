import React, { useState } from "react";

const ControlledField = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted", username, password, email);
		setUsername('');
		setEmail('');
		setPassword('');
		setError('');
	};

	const handleUserOnChange = (e) => {
		setUsername(e.target.value);
	}

	const handleEmailOnChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordOnChange = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
		if (password.length < 6) {
			setError("Password must be at least 6 characters or longer");
		} else {
			setError("");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={username}
					onChange={handleUserOnChange}
					placeholder="Username"
					required
				/>
				<br />
				<input
					type="email"
					value={email}
					onChange={handleEmailOnChange}
					placeholder="Email"
					required
				/>
				<br />
				<input
					type="password"
					value={password}
					onChange={handlePasswordOnChange}
					placeholder="Password"
					required
				/>
				<br />
				<input
					type="submit"
					value="Submit"
				/>
			</form>
			<p style={{ color: "red" }}>
				<small>{error}</small>
			</p>
		</div>
	);
};

export default ControlledField;
