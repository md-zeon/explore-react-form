import React, { useRef } from "react";

const UncontrolledField = () => {
	const emailRef = useRef("");
    const passRef = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(emailRef);
        // console.log(emailRef.current);
        const email = emailRef.current.value;
        console.log(email);
        const pass = passRef.current.value;
        console.log(pass);
    }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					ref={emailRef}
				/>
				<br />
				<input
					type="password"
                    ref={passRef}
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

export default UncontrolledField;
