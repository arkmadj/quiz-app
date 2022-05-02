import React from "react";
import Button from "../../Components/Button/Button";
import "./Quiz.css";

const Quiz:React.FC = () => {
	return (
		<div className="page-container">
			<div className="page-title">Entertainment: Video Games</div>
			<div className="question-container">
				<div className="question-box">
					Unturned originally started as a Roblox game.
				</div>
				<div className="question-pagination">1 of 10</div>
			</div>
			<div className="button-container">
				<Button label="TRUE" />
				<Button label="FALSE" />
			</div>
		</div>
	);
}

export default Quiz;
