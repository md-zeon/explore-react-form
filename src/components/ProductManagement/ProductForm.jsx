import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
	const [error, setError] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const price = parseInt(e.target.price.value);
		const quantity = parseInt(e.target.quantity.value);
		console.log(name, price, quantity);

		// validation
        setError("");
		if (name.length === 0) {
			setError("Please Provide a Product Name");
            return;
		} else if (isNaN(price)) {
			setError("Please Provide a Valid Product Price");
            return;
		} else if (price < 0) {
			setError("Product Price can't be negative!");
            return;
		} else if (isNaN(quantity)) {
			setError("Please Provide Valid Product Quantity");
            return;
		} else if (quantity < 0) {
			setError("Product Quantity can't be Negative!");
            return;
		}

		const newProduct = {
			name,
			price,
			quantity,
		};
		// console.log(newProduct);

		handleAddProduct(newProduct);
	};
	return (
		<div>
			<h3>Add a Product</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Product Name"
				/>
				<br />
				<input
					type="text"
					name="price"
					placeholder="Product Price"
				/>
				<br />
				<input
					type="text"
					name="quantity"
					placeholder="Product Quantity"
				/>
				<br />
				<input
					type="submit"
					value="Submit"
				/>
			</form>
			<p
				style={{
					color: "red",
				}}
			>
				<small>{error}</small>
			</p>
		</div>
	);
};

export default ProductForm;
