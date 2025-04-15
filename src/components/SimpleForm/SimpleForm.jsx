import React from "react";

const SimpleForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e);
		// console.log(e.target);
		// console.log(e.target.name);
		console.log(e.target.name.value);
        console.log(e.target.email.value);
		console.log("Form submitted");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
				/>
				<br />
				<input
					type="email"
					name="email"
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

export default SimpleForm;
