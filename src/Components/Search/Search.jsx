import React from "react";

function Search(props) {
	return (
		<div className="search">
			<form onSubmit={props.submit}>
				<input
					placeholder="Search for a word"
					type="search"
					name="search"
					id="search"
					onChange={props.value}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
}

export default Search;
