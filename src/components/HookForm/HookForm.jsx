import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
	const [name, nameOnChange] = useInputField("");
	const [email, emailOnChange] = useInputField("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted", name, email);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={nameOnChange}
                    placeholder="Name"
				/>
				<br />
				<input
					type="email"
					value={email}
					onChange={emailOnChange}
                    placeholder="Email"
				/>
                <br />
				<input
					type="submit"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default HookForm;
