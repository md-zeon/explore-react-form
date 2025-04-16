import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousin = ({ name, asset }) => {
	return (
		<div>
			<h3>{name}</h3>
			{name === "Tom Lee" && <Special asset={asset}></Special>}
            {name === "Joo Roo" && <Friend></Friend>}
		</div>
	);
};

export default Cousin;
