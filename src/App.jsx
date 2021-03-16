import React, {useState} from "react";
import Search from "./Components/Search/Search";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import Welcome from "./Components/Welcome/Welcome";
import Owlbot from "owlbot-js";
import "./main.css";

function App() {
	const [result, setResult] = useState([]);
	const [search, setSearch] = useState("");
	const client = Owlbot(process.env.REACT_APP_API_TOKEN);

	const renderResult = () => {
		return (
			<>
				<div className="result-word">
					<span className="word">{result.word}</span>
					<span className="emoji">
						{result.definitions ? result.definitions[0].emoji : null}
					</span>
					<span className="pronunciation">{result.pronunciation}</span>
				</div>
				<div className="result-definitions">
					{result.definitions ? (
						result.definitions.map(def => {
							return (
								<>
									<div className="def-group">
										<span className="def-type">{def.type}</span>
										<p className="def-definition">{def.definition}</p>
										{def.example ? (
											<div className="def-example">
												<span>example</span>
												<p>{def.example.replace(/<\/?[^>]+>/gi, "")}</p>
											</div>
										) : null}
									</div>
									{def.image_url ? (
										<div className="image">
											<img src={def.image_url} alt={result.name}></img>
										</div>
									) : null}
								</>
							);
						})
					) : (
						<Loading />
					)}
				</div>
			</>
		);
	};

	const getValue = e => {
		setSearch(e.target.value);
	};

	const submitHandler = e => {
		e.preventDefault();
		e.target.reset();
		client.define(search).then(res => setResult(res));
	};

	return (
		<>
			<Search submit={submitHandler} value={getValue} />
			{search ? <Content content={renderResult()} /> : <Welcome />}
			<Footer />
		</>
	);
}

export default App;
