import React from "react";
import Button from "./Components/Button/Button";
import "./App.css";

const App:React.FC = () => {
	return (
		<div className="app-container">
			<div className="page-title">Welcome to the trival Challenge</div>
			<div className="page-description">
				You will be presented with 10 True or False questions
			</div>
			<div className="page-question">Can you score 100%?</div>
			<div className="button-container">
				<Button label="BEGIN" />
			</div>
		</div>
	);
}

export default App;
