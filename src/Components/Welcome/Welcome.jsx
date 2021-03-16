import React from "react";

function Welcome() {
	return (
		<div class="welcome-msg">
			<h3>Welcome to React Dictionary</h3>
			<p>
				This is a simple React App that serves as a dictionary. It uses the{" "}
				<a href="https://owlbot.info" target="_blank" rel="noopener noreferrer">
					OwlBot
				</a>{" "}
				API in order to retrieve the definitions and examples. To start using it just type
				in a word, it will provide your search query, how it is pronounced and one
				definition or more, if available. In some cases it will also provide a picture
				related to what you have searched for.
			</p>
		</div>
	);
}

export default Welcome;
